module.exports = {
  extends: ["custom/react"],
  "rules": {
    "react/no-unknown-property": ['error', { ignore: ['css'] }],
    "import/no-extraneous-dependencies": "off"
  }
};
