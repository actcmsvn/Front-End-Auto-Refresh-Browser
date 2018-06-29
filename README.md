Please refer 

Demo: https://minhlong.github.io/Front-End-Auto-Refresh-Browser

Source code: https://github.com/minhlong/Front-End-Auto-Refresh-Browser

## Build

#### Config

Update `version` in environment and version.json file before building and deploy source code on server. The browser will be updated **automatically** base on the `version`

```
// env.default.ts
export const environment = {
  ...
  version: 'x.x.xxx',
 
  // Auto check and refresh browser after 60 seconds
  versionFrequency: 1000 * 60,
  ...
};
```

```
// version.json
{
  version: 'x.x.xxx',
}
```

#### Build

```
ng build --prod --output-path docs --base-href Front-End-Auto-Refresh-Browser
```
