---
title: "Why you might not need unified APIs?"
socialTitle: "Unified APIs are marketed as a solution for various integration problems, but are they always necessary?"
description: "Unified APIs promise to streamline integrations, but they might not be the best fit for every business scenario. This blog explores why a tailored approach may sometimes be better."
pubDate: 2024-06-27T13:48:49.441Z
updatedDate: 2024-06-27T13:48:49.441Z
isDraft: false
categories: ["unified", "integration"]
---

Unified APIs are getting a lot of attention in the market. And they should be, because they manage to solve a problem that was never there. Haha..
You see, unified api companies convinced you that speed is your biggest assets and quality and iterations can go for a toss(or as we say in Hindi, गया तेल लेने)

In retrospect, unified APIs are like Redux for React. Most companies don’t actually need them, but they're still sold on the idea.

### But before any further, what is unified api?

Unified API is a service that gives you a single end point to work with a few common set of services at once.
For example if you want your users to `bring your own CRMs (BYOC)` in your SAAS or product, yet do not want to deal with complexities of dealing with multiple CRMs yourself. You can offshore this to services like nango.dev or unified.to etc. and save development hours.

For the sake of simplicity, let say you started supporting three CRMs.

- Hubspot
- Salesforce
- Pipedrive

And now users can connect their hubspot, salesforce or pipedrive accounts into your saas to sync the data.

### So far so good. Let’s deep dive.

What is the need for unified APIs as an external service? Why can’t all CRMs have a common contract or OPENAPI specification? Wouldn’t that be a good practice?

Going back to the basics reveals that while they all might fall into the category of CRMs, they are not similar at all. In fact, the reason why all three of them are market leaders is because they cater to very different markets:

- HubSpot is excellent for inbound marketing, sales, and customer service.
- Salesforce is a very comprehensive CRM, often suitable for enterprises.
- Pipedrive is primarily focused on sales pipeline management.

The reason why their APIs are different is because they are all very opinionated software, and their APIs and documentation reflect this. APIs are much more than a specification; they represent the direction in which you can extend a certain service. APIs are also a reflection of the company’s culture.

Unifying the APIs of HubSpot, Salesforce, and Pipedrive under one umbrella is like trying to categorize a tiger, an elephant, and a donkey merely as animals, without acknowledging their unique characteristics and strengths.

For some solid examples, consider this: Salesforce allows extensive customization with custom objects and fields, which might never be available in HubSpot or Pipedrive and your unified provider won’t let you add anything custom for your salesforce audience. Bummer!!
So while you can start integration with a unified API (which is also a big learning curve and a complex exercise in itself), you will have to build your custom integrations at some point. Because the moment you see a surge in Salesforce customers and want to offer a custom data sync facility, you will hit walls with a unified API.

While unified APIs might be fit for very small use-case-driven applications like “contact sync,” they are never suitable for an ambitious software company. It’s like going back to bad programming practices just because you want to save on today’s budget. It might increase your tech debt at the cost of marketing stunts of supporting a wider range of software.

The reality is, it does not matter if you support a wide range of APIs. What matters is how deep and extensive your support is for a few services.

Maybe the right strategy should be to support fewer APIs and expand/sunset when you see users requesting more services or not using the present APIs? The idea of supporting a large set of APIs without realizing if they will ever be used is a wasted GTM strategy.

**Hence, you might not need unified APIs.**
