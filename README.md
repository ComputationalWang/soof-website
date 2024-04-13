Step 1 Install the needed programs:
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/download)
- [Project itself](https://github.com/ComputationalWang/soof-website/archive/refs/heads/main.zip)

Step 2 Initiating the program:
1. Extract the [project zip](https://github.com/ComputationalWang/soof-website/archive/refs/heads/main.zip) somewhere on the PC.
2. Open Visual Studio Code and open the project. [Video 0:22 to 0:53](https://youtu.be/B-s71n0dHUk?si=nmgfIzGVjAd-g3Tn&t=21)
3. In the command terminal write "npm install", this will install the needed dependencies for the project.

Step 3 Opening the site in a local file:
1. In the command terminal, write "npm run dev", this will open up the site in a localhost.

Step 4 Editing pictures/text in the project:
1. To edit the text go to [de_driesprong/src/constants/index.ts](de_driesprong/src/constants/index.ts). This contains all the info text given on the website. For example, `about_us_text` has the text with the about us; changing this will change that part.
2. To edit or add pictures you can add them to the [de_driesprong/src/assets](de_driesprong/src/assets) folder, which contains all the images. This image then also has to be added into the [de_driesprong/src/assets/index.ts](de_driesprong/src/assets.index.ts) as a reference. This means that it needs to be added in the `export` part and also imported in the lines above such as `import logo from './logo_transparent.webp'`.

Step 5 Creating the files to upload on the provider:
1. Write `npm run build` in the command terminal to create the files so the host can read it, this can be found in [de_driesprong/dist](de_driesprong/dist).
2. Login on the FTP environment.
3. Remove the old files (could back them up somewhere by downloading them).
4. Then copy everything from that and put it in the given host ftp environment.
5. 
