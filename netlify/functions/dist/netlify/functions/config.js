"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminDb = void 0;
const app_1 = require("firebase-admin/app");
const database_1 = require("firebase-admin/database");
const app = (0, app_1.initializeApp)({
    credential: (0, app_1.cert)({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: (_a = process.env.FIREBASE_PRIVATE_KEY) === null || _a === void 0 ? void 0 : _a.replace(/\\n/g, '\n'),
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
});
exports.adminDb = (0, database_1.getDatabase)(app);
