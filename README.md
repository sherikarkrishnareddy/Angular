# Angular12


Getting Started with Angular12
Macbooks-MBP:DNG macbook$ sudo npm install -g @angular/cli@latest 
Password:
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
/usr/local/bin/ng -> /usr/local/lib/node_modules/@angular/cli/bin/ng

> @angular/cli@12.2.8 postinstall /usr/local/lib/node_modules/@angular/cli
> node ./bin/postinstall/script.js

? Would you like to share anonymous usage data with the Angular Team at Google under
Google’s Privacy Policy at https://policies.google.com/privacy? For more details and
how to change this setting, see https://angular.io/analytics. Yes
+ @angular/cli@12.2.8
added 240 packages from 183 contributors in 15044.565s
Macbooks-MBP:DNG macbook$ 
Macbooks-MBP:angular macbook$ ng new my-first-app --no-strict
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
CREATE my-first-app/README.md (1056 bytes)
CREATE my-first-app/.editorconfig (274 bytes)
CREATE my-first-app/.gitignore (604 bytes)
CREATE my-first-app/angular.json (2987 bytes)
CREATE my-first-app/package.json (1074 bytes)
CREATE my-first-app/tsconfig.json (538 bytes)
CREATE my-first-app/.browserslistrc (703 bytes)
CREATE my-first-app/karma.conf.js (1429 bytes)
CREATE my-first-app/tsconfig.app.json (287 bytes)
CREATE my-first-app/tsconfig.spec.json (333 bytes)
CREATE my-first-app/src/favicon.ico (948 bytes)
CREATE my-first-app/src/index.html (296 bytes)
CREATE my-first-app/src/main.ts (372 bytes)
CREATE my-first-app/src/polyfills.ts (2820 bytes)
CREATE my-first-app/src/styles.css (80 bytes)
CREATE my-first-app/src/test.ts (788 bytes)
CREATE my-first-app/src/assets/.gitkeep (0 bytes)
CREATE my-first-app/src/environments/environment.prod.ts (51 bytes)
CREATE my-first-app/src/environments/environment.ts (658 bytes)
CREATE my-first-app/src/app/app.module.ts (314 bytes)
CREATE my-first-app/src/app/app.component.css (0 bytes)
CREATE my-first-app/src/app/app.component.html (24585 bytes)
CREATE my-first-app/src/app/app.component.spec.ts (974 bytes)
CREATE my-first-app/src/app/app.component.ts (216 bytes)
⠏ Installing packages (npm)...



Macbooks-MBP:angular macbook$ ng new my-first-app --no-strict
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
✔ Packages installed successfully.
    Successfully initialized git.
Nothing to be done.
Macbooks-MBP:angular macbook$ ng serve
The serve command requires to be run in an Angular project, but a project definition could not be found.
Macbooks-MBP:angular macbook$ cd my-first-app/
Macbooks-MBP:my-first-app macbook$ ng serve
⠋ Generating browser application bundles (phase: setup)...Compiling @angular/core : es2015 as esm2015
Compiling @angular/common : es2015 as esm2015
Compiling @angular/platform-browser : es2015 as esm2015
Compiling @angular/platform-browser-dynamic : es2015 as esm2015
✔ Browser application bundle generation complete.

Initial Chunk Files | Names         |      Size
vendor.js           | vendor        |   2.09 MB
polyfills.js        | polyfills     | 128.51 kB
main.js             | main          |  54.67 kB
runtime.js          | runtime       |   6.62 kB
styles.css          | styles        | 736 bytes

                    | Initial Total |   2.27 MB

Build at: 2021-10-02T13:55:13.552Z - Hash: 245627ab7ac955030a33 - Time: 19908ms

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


✔ Compiled successfully.
✔ Browser application bundle generation complete.

5 unchanged chunks

Build at: 2021-10-02T13:55:15.103Z - Hash: 5dfeebab661625001fa5 - Time: 1075ms

✔ Compiled successfully.
Macbooks-MBP:my-first-app macbook$ npm install --save bootstrap@3
npm WARN ajv-keywords@3.5.2 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.

+ bootstrap@3.4.1
added 1 package from 1 contributor, removed 1 package and audited 1298 packages in 13.341s

87 packages are looking for funding
  run `npm fund` for details

found 1 moderate severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details

┌────────────────────────────────────────────────────────────┐
│                  npm update check failed                   │
│            Try running with sudo or get access             │
│            to the local update config store via            │
│ sudo chown -R $USER:$(id -gn $USER) /Users/macbook/.config │
└────────────────────────────────────────────────────────────┘
Macbooks-MBP:my-first-app macbook$ 

