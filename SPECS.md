> Note: If you are searching for features, you can read the FEATURES.md file included in this project.

# Modern OS specs

- Use HTML+Javascript as code languages;
- Manifest.json containing OS name, icon, description, version, developer-name, developer-url, OS shop ID, manifest version number, default language;
- Index page in root directory;
> - You need hide this file for users don't make dangerous changes in operating system. [Learn more](http:// "");
> - Other good trick is create an index.html (thinking in actual not modern browsers) in root directory redirecting to the main page in System folder, and too reference this file in manifest.json. [Learn more](http:// "").

- Boot screen in index.html for be shown while page is loading;
> This boot div will can receive communications from page for show status of loading in real time.

- Can do bootoff for user can go to other operating system via DCRS (Device Checker/Runtime System) or traditionally & direct turn off the device;
- Settings only for config the work ecosystem, not to config device (for config device, user will use DCRS);
- Responsible code to work in all possible resolutions, since watchs to teather-screens;
- Can be installed as LIVE OS, including an installer app for installing OS;
- Constant updates using GIT system;
- Constant updates separating "Alpha", "Beta" and "Stable" categories;
> 
- You can use more or less channels, but make sure to separe the "Alpha" and "Stable" channels to make your users have an constantly updated OS.
- If your project is closed-source, you need to create another repository only for your updates. If your project is open-source, you can simply use your own repository.
- Each commit is considered an update or an update pack, and you need to include a manifest file with infos of update/update pack/updates included in update pack.
> 

- Can work online on browsers;
- ;
- ;
- ;
- ;