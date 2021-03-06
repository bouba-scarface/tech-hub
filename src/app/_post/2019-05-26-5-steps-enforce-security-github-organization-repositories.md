---
layout: post
title: 5 steps to enforce security on your GitHub organization's repositories
date: 2019-05-26
description: 5 steps to enforce security on your GitHub organization's repositories
excerpt: Keeping your data safe is a full-time job. Discover 5 easy to implement steps to enforce security on your GitHub organization's repositories.
image: /assets/images/GitHub-Security.png
author: Guillaume Meyer
tags:
  - GitHub
  - Security
---
We at SalesTim know you care about how your personal information is used and shared, and we take your privacy seriously by implementing the most rigorous practices for our developments.  
Therefore we know that **keeping your data safe is a full-time job**.

Discover 5 **easy to implement** steps to enforce security on your GitHub organization's repositories:  

|------+--------|-------|
| Step | Action | Check |
|:----:|--------|-------|
| **1** | Verify your organization's domain | ![GitHub verified domains badge](https://img.shields.io/badge/Domains-Verified-success.svg?logo=github) |
| **2** | Require two-factor authentication | ![GitHub 2FA badge](https://img.shields.io/badge/2FA-Verified-success.svg?logo=github)|
| **3** | Configure protected branches | ![GitHub protected branches](https://img.shields.io/badge/Production-Branch%20protected-success.svg?logo=github) |
| **4** | Enable automated security alerts | ![GitHub Security Alerts](https://img.shields.io/badge/Security%20Alerts-0-success.svg?logo=github) |
| **5** | Configure automated security fixes | ![GitHub Security fixes](https://img.shields.io/badge/Pending%20Security%20Fixes-0-success.svg?logo=github) |
{:.table-dark .table-sm .table-striped}

___
___

# 1. Verify your organization's domain

![GitHub verified domains badge](https://img.shields.io/badge/Domains-Verified-success.svg?logo=github)

In GitHub, you can verify the domains controlled by your organization to confirm your organization's identity.

After verifying ownership of your organization's domains, a "Verified" badge will display on the organization's profile:

![Verified Domain](/assets/images/verifiedDomain.png)

You can define your verified domains from your organization settings:

![Verified Domain Settings](/assets/images/verifiedDomainSettings.png)

Note: If the email address and website shown on your organization's profile use variants of the same domain, **you must verify both variants**. For example, if your organization's profile shows the website www.example.com and the email address info@example.com, you would need to verify both www.example.com and example.com.

Learn more about [verifying your organization's domain...](https://help.github.com/en/articles/verifying-your-organizations-domain)  

***Why switch to the Corporate Terms of Service?***

The Standard Terms of Service is an agreement between GitHub and you as an individual. To enter into an agreement with GitHub on behalf of you company organization owners can upgrade to the Corporate Terms of Service:

![Verified Domain Settings](/assets/images/corporateTerms.png)

Benefit: If your organization is on GitHub Enterprise Cloud and has agreed to the Corporate Terms of Service, organization owners will be able to verify the identity of organization members by viewing each member's email address within the verified domain.

Learn more about [upgrading to the Corporate Terms of Service...](https://help.github.com/en/articles/upgrading-to-the-corporate-terms-of-service)  

___

# 2. Require two-factor authentication

![GitHub 2FA badge](https://img.shields.io/badge/2FA-Verified-success.svg?logo=github)

Organization owners can require organization members, outside collaborators, and billing managers to enable two-factor authentication for their personal accounts, making it harder for malicious actors to access an organization's repositories and settings.  

You can enforce 2FA from your organization settings:

![GitHub 2FA](/assets/images/GitHub2FA.png)

Learn more about [requiring two-factor authentication...](https://help.github.com/en/articles/configuring-two-factor-authentication)  

___

# 3. Configure protected branches

![GitHub protected branches](https://img.shields.io/badge/Production-Branch%20protected-success.svg?logo=github)

Protected branches ensure that collaborators on your repository cannot make irrevocable changes to branches.

You can define your branch protection rules from your repository settings:

![GitHub Protected Branches](/assets/images/GitHubProtectedBranches.png)

Enabling protected branches also allows you to enable other optional checks and requirements, like required status, security checks and required reviews:

![GitHub Protected Branches Checks](/assets/images/GitHubProtectedBranchesCheck.png)

Learn more about [protected branches...](https://help.github.com/en/articles/configuring-protected-branches)

___

# 4. Enable automated security alerts

![GitHub Security Alerts](https://img.shields.io/badge/Security%20Alerts-0-success.svg?logo=github)

GitHub automatically tracks public vulnerabilities in packages from supported languages on MITRE's Common Vulnerabilities and Exposures (CVE) List, and use a combination of machine learning and human review to detect vulnerabilities that are not published in the CVE list.  

When GitHub discovers or is notified of a new vulnerability, the SalesTim engineering team is notified with a security alert:

![GitHub Security Alerts](/assets/images/GitHubSecurityAlerts.png)

Each security alert includes a severity level and a link to the affected file in our projects. When available, the alert will include further details about the vulnerability and a suggested fix.  

Any alert of any severity breaks our build and deployment process until resolution.

To enable security alerts, you must enable GitHub Data Services at the repository level:

![GitHub Data Services](/assets/images/GitHubDataServices.png)

Learn more about [Security Alerts...](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)

___

# 5. Configure automated security fixes

![GitHub Security fixes](https://img.shields.io/badge/Pending%20Security%20Fixes-0-success.svg?logo=github)

Following the acquisition and integration of Dependabot, GitHub monitors our app dependencies for known security vulnerabilities and automatically open pull requests to update them to the minimum required version.

![GitHub automated security fixes](/assets/images/GitHub-automated-security-fixes.jpg)

Read the [announcement...](https://www.helpnetsecurity.com/2019/05/28/github-automated-security-fixes/)

Automated security fixes update vulnerable dependencies to the minimum version that resolves the vulnerability. They are automatically enabled in repositories that use the dependency graph and security alerts, but you can choose to disable automatic pull requests and generate security fixes manually instead:

![GitHub automated security fix](/assets/images/GitHubSecurityFix.png)

Automated security requests contain information about the vulnerability, such as release notes, changelog entries, and commit details, but also compatibility scores, which show developers how likely it is for the security update to cause breaking changes to their project.

Note: Automatic security fixes are **available in beta**. You can enable automatic security fixes for any repository that uses security alerts and the dependency graph.

Learn more about [configuring automated security fixes...](https://help.github.com/en/articles/configuring-automated-security-fixes)

___

# To go further

GitHub brings to the table a lot of options to enforce your organization and repositories security, therefore these 5 easy to implement steps are just the beginning of an epic journey.  

Here are a few other areas of investment that we're currently working on that may interest you, so stay tuned for later posts.


## b. Enforce SAML single sign-on

Benefits: If you enforce SAML SSO in your organization, any members, including admins who have not authenticated via your SAML identity provider (such as Microsoft Azure AD at SalesTim), will be removed from the organization and will receive an email notifying them about the removal.  

![GitHub SAML](/assets/images/GitHubSAMLAD.png)

Bots and service accounts that do not have external identities set up in your organization's IdP will also be removed. 

Note: This feature is only available with **GitHub Enterprise Cloud**.

Learn more:
* [SAML single sign-on...](https://help.github.com/en/articles/connecting-your-identity-provider-to-your-organization)
* [Azure Active Directory integration with GitHub...](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-tutorial)



## a. Enable required commit signing

Repository administrators can enforce required commit signing on a branch to block all commits that are not signed and verified.

Before enabling required commit signing on a branch, you must first set the branch up as a protected branch:

![Require Commit Signing](/assets/images/require-signed-commits.png)

Learn more about [required commit signing...](https://help.github.com/en/articles/enabling-required-commit-signing)


## c. Use GitHub Package Registry

GitHub Package Registry is fully integrated with GitHub, so you can use the same search, browsing, and management tools to find and publish packages as you do for your repositories.  
You can also use the same user and team permissions to manage code and packages together.

![GitHub Package Registry](/assets/images/GitHub-Packages-Registry.png)

Learn more about [GitHub Package Registry...](https://github.com/features/package-registry/)