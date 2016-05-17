# Getting started

## Install

```
npm install
```
 - Add symbolic link from `node_modules` to `wwwroot/node_modules`
 - Setup Ionic repo
 - Link to ionic local repo

### Setup ionic official repo locally

```
git clone https://github.com/driftyco/ionic.git
cd ionic
npm install
gulp build.release
npm link
```

## Serve/Watch

```
gulp watch

```


## Rebuild

```
gulp rebuild

```