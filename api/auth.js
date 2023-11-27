import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import ThirdPartyPasswordless from "supertokens-node/recipe/thirdpartypasswordless";
import express from "express";
import cors from "cors";
import supertokens from "supertokens-node";
import { middleware } from "supertokens-node/framework/express";

supertokens.init({
  framework: "express",
  supertokens: {
    // These are the connection details of the app you created on supertokens.com
    connectionURI: process.env.ST_CONNECTIONURI,
    apiKey: process.env.ST_APIKEY,
  },
  appInfo: {
    // learn more about this on https://supertokens.com/docs/session/appinfo
    appName: "move",
    apiDomain: "https://hitesh.io",
    websiteDomain: "https://hitesh.io",
    apiBasePath: "/api",
    websiteBasePath: "/",
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      flowType: "USER_INPUT_CODE_AND_MAGIC_LINK",
      contactMethod: "EMAIL",
      providers: [{
        config: {
          thirdPartyId: "google",
          clients: [{
            clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
            clientSecret: "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"
          }]
        }
      }, {
        config: {
          thirdPartyId: "github",
          clients: [{
            clientId: "467101b197249757c71f",
            clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd"
          }]
        }
      }, {
        config: {
          thirdPartyId: "apple",
          clients: [{
            clientId: "4398792-io.supertokens.example.service",
            additionalConfig: {
              keyId: "7M48Y4RYDL",
              privateKey:
                "-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----",
              teamId: "YWQCXGJRJL",
            }
          }]
        }
      }],
    }),
    Session.init(), // initializes session features
  ],
});
let app = express();
app.use(cors({
  origin: "https://hitesh.io",
  allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
  credentials: true,
}));
app.use(middleware());
app.use(errorHandler())
module.exports = app;