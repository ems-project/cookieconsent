# Cookieconsent Script

A script that displays a cookie consent message as required by EU regulation (GDPR). The plugin displays a message on the user's first visit and they have the ability to consent to different categories of cookies and services.

See the demo: [Cookieconsent](https://brainsum.github.io/cookieconsent/)

## Usage

To be sure to catching all js files added dynamically by third parties, be careful that this javascript script is the first javascript file in the head tag of your page.. 

### Usage with Webpack

npm install --save-dev @elasticms/cookieconsent

in your entry js file :

```javascript
import cookieConsent from '@elasticms/cookieconsent';

cookieConsent();

<script>
  window.CookieConsent.init({
    // More link URL on bar
    modalMainTextMoreLink: null,
    // How lond to wait until bar comes up
    barTimeout: 1000,
    // Look and feel
    theme: {
      barColor: '#2C7CBF',
      barTextColor: '#FFF',
      barMainButtonColor: '#FFF',
      barMainButtonTextColor: '#2C7CBF',
      modalMainButtonColor: '#4285F4',
      modalMainButtonTextColor: '#FFF',
    },
    language: {
      // Current language
      current: 'en',
      locale: {
        en: {
          barMainText: 'This website uses cookies to ensure you get the best experience on our website.',
          barLinkSetting: 'Cookie Settings',
          barBtnAcceptAll: 'Accept all cookies',
          modalMainTitle: 'Cookie settings',
          modalMainText: 'Cookies are small piece of data sent from a website and stored on the user\'s computer by the user\'s web browser while the user is browsing. Your browser stores each message in a small file, called cookie. When you request another page from the server, your browser sends the cookie back to the server. Cookies were designed to be a reliable mechanism for websites to remember information or to record the user\'s browsing activity.',
          modalBtnSave: 'Save current settings',
          modalBtnAcceptAll: 'Accept all cookies and close',
          modalAffectedSolutions: 'Affected solutions:',
          learnMore: 'Learn More',
          on: 'On',
          off: 'Off',
        }
      }
    },
    // List all the categories you want to display
    categories: {
      // Unique name
      // This probably will be the default category
      necessary: {
        // The cookies here are necessary and category cant be turned off.
        // Wanted config value  will be ignored.
        needed: true,
        // The cookies in this category will be let trough.
        // This probably should be false if not necessary category
        wanted: true,
        // If the checkbox is on or off at first run.
        checked: true,
        // Language settings for categories
        language: {
          locale: {
            en: {
              name: 'Strictly Necessary Cookies',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu commodo est, nec gravida odio. Suspendisse scelerisque a ex nec semper.',
            },
            hu: {
              name: 'Szükséges sütik',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu commodo est, nec gravida odio. Suspendisse scelerisque a ex nec semper.',
            }
          }
        }
      }
    },
    // List actual services here
    services: {
      // Unique name
      analytics: {
        // Existing category Unique name
        // This example shows how to block Google Analytics
        category: 'necessary',
        // Type of blocking to apply here.
        // This depends on the type of script we are trying to block
        // Can be: dynamic-script, script-tag, wrapped, localcookie
        type: 'dynamic-script',
        // Only needed if "type: dynamic-script"
        // The filter will look for this keyword in inserted scipt tags
        // and block if match found
        search: 'analytics',
        language: {
          locale: {
            en: {
              name: 'Google Analytics'
            },
            hu: {
              name: 'Google Analytics'
            }
          }
        }
      }
    }
  });
  </script>
```
