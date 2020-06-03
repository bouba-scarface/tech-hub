# 🎯 Audience Targeting

## Purpose
A targeting rule could be applied to each template to define who can use it, based on the user profile data.  
Intrinsically, targeting rules are a combination of values and expressions that are evaluated against a user profile to determine if a template is shown or not.

::: tip
N.B: This option is disabled by default.
:::

## Available values

Targeting rules can use user profile information through the following tags:

| Tag | Description |
|-----|-------------|
| ```user.msDisplayName``` | *User full name. (for example "Bob Dirac")*
| ```user.msUPN``` | *User UPN. In Active Directory, a User Principal Name (UPN) is the name of a system user in an email address format. A UPN (for example: "bob.dirac@contoso.com") consists of the user name (logon name), separator (the @ symbol), and domain name (UPN suffix).* <hr>***Important: A UPN is not the same as an email address. Sometimes, a UPN can match a user's email address, but this is not a general rule.*** | 
| ```user.msEmail``` | *User email (for example: "bob.dirac@domain.com")* |
| ```user.msPreferredLanguage``` | *User preferred language in Microsoft 365.* <hr>***Language and locale codes are limited to those in the [ISO 639-1 standard](https://en.wikipedia.org/wiki/ISO_639-1).*** |
| ```user.msGivenName``` | *User given name (for example: "Bob")* |
| ```user.msCountry``` | *User country (for example: "France")* |
| ```user.msCompanyName``` | *User company name (for example: "Contoso")* |
| ```user.msDepartment``` | *User department (for example: "Marketing")* |
| ```user.msCity``` | *User city (for example: "Paris")* |
| ```user.msJobTitle``` | *User job title (for example: "Product Manager")* |
| ```user.msSurname``` | *User surname (for example: "Dirac")* |
| ```user.msUsageLocation``` |* Office 365 usage location. (for example: "US")* <hr>***Rely on the [ISO 3166-1 alpha-2 country codes...](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)*** |

::: warning
Be careful: These tags are **CASE-SENSITIVE**!
:::

## Common scenarios

In combination with tags, targeting rules can use standard javascript operators and functions.

::: tip
N.B: The Business Solution will be shown to a user if the expression is evaluated as ```true```
:::

This section shows some common scenarios to target your templates to specific audiences in an organization.

### Examples: Boolean operators

#### "Users from France"
```javascript
user.msCountry === 'FR'
```
#### "Users outside Germany"
```javascript
user.msCountry !== 'DE'
```

### Examples: Javascript functions

#### "English speakers from any country"
```javascript
user.msPreferredLanguage.includes('en-')
```

### Examples: Combining multiple criteria

#### "French or Belgium users from the Marketing Department"
```javascript
( user.msCountry === 'FR' || user.msCountry === 'BE' ) && user.msDepartment === 'Marketing'
```

#### Domain-based targeting: "users with @contoso.com or @contoso.fr in their domain name"
```javascript
user.msEmail.includes('@contoso.com') === true || user.msEmail.includes('@contoso.fr') === true
```

## Tips

::: tip Operator precedence
Rules follows the standard javascript [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) so you can combine multiple rules in one expression, 
:::

::: tip Syntax Assistant
A "Check Syntax" button is available to test the rule against the current logged user. You can expect 3 kind of outcomes.
1. You would have access:  
![Targeting OK](/img/salestimautomation/targeting/targetingOK.png)
2. You would not have access:  
![Targeting NOK](/img/salestimautomation/targeting/targetingNOK.png)
3. An error is detected:  
![Targeting Error](/img/salestimautomation/targeting/targetingError.png)
In case of error, the technical details are also available, helping you solve the issue.
:::

## Enable your rule

You just have to save your template.

::: warning Known Issue
Due to our caching mechanism, an update to the user profile may not be reflected immediately and therefore the targeting rule may not be applied for a few time.  
See our [Known Issue](../salestimplatform/knownissues.md#🚩-audience-targeting-rules-are-not-immediately-applied-to-recently-updated-user-profiles) file for more information.
:::
