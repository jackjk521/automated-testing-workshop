# Initial Setup 

## Static Analysis Testing
### Commands to run:
git checkout static_testing
npm install

### Fix the file automatically
npx eslint file_path --fix


## End to end Testing
Go to the end_to_end_testing folder 
cd end_to_end_testing/my-app

## Commands to run: 
git checkout app_end_to_end_testing
npm i
npm run dev

npx playwright test
npx playwright test --ui


# Commands to do for init
npx eslint --init

