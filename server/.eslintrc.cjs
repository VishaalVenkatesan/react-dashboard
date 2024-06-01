module.exports = {
  root: true,
  env: { 
    node: true, // Node.js environment
    es2020: true 
  },
  extends: [
    'eslint:recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module' 
  },
  rules: {
    
  }
}
