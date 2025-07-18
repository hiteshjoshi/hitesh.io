#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

// Helper to create a URL-friendly slug
function createSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-'); // Replace multiple hyphens with single hyphen
}

// Helper to format date
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

async function createBlogPost() {
  console.log('\n🚀 Create a new blog post\n');

  try {
    // Get blog post title
    const title = await question('📝 Blog post title: ');
    if (!title.trim()) {
      console.log('❌ Title is required!');
      process.exit(1);
    }

    // Get blog post description
    const description = await question('📄 Brief description: ');
    if (!description.trim()) {
      console.log('❌ Description is required!');
      process.exit(1);
    }

    // Get categories
    const categoriesInput = await question('🏷️  Categories (comma-separated): ');
    const categories = categoriesInput
      .split(',')
      .map(cat => cat.trim())
      .filter(cat => cat.length > 0);

    // Ask if draft
    const isDraftInput = await question('📋 Is this a draft? (y/N): ');
    const isDraft = isDraftInput.toLowerCase() === 'y';

    // Ask about creating a directory
    const createDirInput = await question('📁 Create a directory for assets? (y/N): ');
    const shouldCreateDir = createDirInput.toLowerCase() === 'y';

    // Generate slug
    const slug = createSlug(title);
    const date = new Date();
    const formattedDate = formatDate(date);

    // Create the frontmatter
    const frontmatter = `---
title: "${title}"
description: "${description}"
pubDate: ${formattedDate}
categories: [${categories.map(cat => `"${cat}"`).join(', ')}]
isDraft: ${isDraft}
---`;

    // Create the content
    const content = `${frontmatter}

# ${title}

${description}

## Introduction

Start writing your blog post here...

## Main Content

Add your main content here...

## Conclusion

Wrap up your thoughts here...
`;

    // Determine the file path
    const contentDir = join(process.cwd(), 'src', 'content', 'blog');

    // Create content directory if it doesn't exist
    if (!existsSync(contentDir)) {
      mkdirSync(contentDir, { recursive: true });
    }

    let filePath;
    let assetDir;

    if (shouldCreateDir) {
      // Create a directory for the post
      const postDir = join(contentDir, slug);
      if (!existsSync(postDir)) {
        mkdirSync(postDir, { recursive: true });
      }
      filePath = join(postDir, 'index.md');
      assetDir = postDir;
    } else {
      // Create just the markdown file
      filePath = join(contentDir, `${slug}.md`);
    }

    // Check if file already exists
    if (existsSync(filePath)) {
      const overwrite = await question('⚠️  File already exists. Overwrite? (y/N): ');
      if (overwrite.toLowerCase() !== 'y') {
        console.log('❌ Cancelled!');
        process.exit(0);
      }
    }

    // Write the file
    writeFileSync(filePath, content);

    console.log('\n✅ Blog post created successfully!');
    console.log(`📄 File: ${filePath}`);
    if (assetDir) {
      console.log(`📁 Asset directory: ${assetDir}`);
      console.log('💡 You can now add images and other assets to this directory');
    }
    console.log(`🔗 URL will be: /${slug}/`);
    console.log(`📅 Date: ${formattedDate}`);
    console.log(`🏷️  Categories: ${categories.join(', ')}`);
    console.log(`📋 Status: ${isDraft ? 'Draft' : 'Published'}`);
    console.log('\n🎉 Happy writing!\n');

  } catch (error) {
    console.error('❌ Error creating blog post:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Run the script
createBlogPost();
