const fs = require('fs')
const { browserSync } = require('vibium')
const assert = require('node:assert');
const vibe = browserSync.launch()

// Go to a website
vibe.go('https://zomato.com')
console.log('Loaded zomato.com')

// Take a screenshot
const png = vibe.screenshot()
fs.writeFileSync('screenshot.png', png)
console.log('Saved screenshot.png')

const link = vibe.find('a')
console.log('Found link:', link.text())
link.click()
console.log('Clicked!')

assert.ok(vibe.find('[alt="Zomato logo"]'),"Zomato logo should visible");
console.log('Zomato Logog is visible !');

// Close the browser
vibe.quit()
console.log('Done!')