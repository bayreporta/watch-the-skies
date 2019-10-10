# watch-the-Skies

This is the project file for the Watch the Skies Prototype, made for project nexus.

[-File Structure-]
> reactapp - Front end React Applications
    src - Main source code
    components - All react components that make up the UI
        common - Reusable react components
    pages - All pages within the page routing hiarchy

> server - Node.js Server
    config - Any keys or configuration files for the server
    models - All Mongoose document models
    routes - All Express routes
        api - Currently the main routes folder (Unlear why)
    util - Application functions
        init-json - Initial Load data
        systems - Game systems
            intercept - The Interception system for WTS
                Log - Logging for the Interception system

[-Scripts for running-]
> Dev: npm run dev
    Runs the react development server and the node server concurrently with nodemon online.