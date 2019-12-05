# Challenge App
##### Simple app to write 10m record into clickhouse database

#### Requirement

+ Node.js `>=8`

+ Clickhouse
#### Installation

```
git clone git@github.com:saeedjalalisj/challenge.git app
cd app
npm install
```
#### Usage
create `.env file` and add
```
DB_HOST=localhost # add clickhouse host
... # if you need add other config
```
for run the app:
```$xslt
npm start
```

#### Analyse
How long all data was written to db?
```$xslt
31s  900.518715ms
```

How long run funnel query?
```$xslt
3.413637626
```
> This result may be change on other device

**This test run on:**

Linux/ubuntu-19.04

7856MiB System memory

Intel(R) Core(TM) i7-4710HQ CPU @ 2.50GHz (Quad Core)
