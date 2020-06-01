# Releases

<Classification label="public" />

## Install from the Microsoft Teams store

You can install the latest version of Salestim from the Microsoft Teams Store:  
<a href="https://teams.microsoft.com/l/app/589748de-ec98-4616-9063-e91c629bd1a4?source=store-copy-link" target="_blank">
![Add SalesTim to Microsoft Teams](https://img.shields.io/badge/Microsoft_Teams-Install_SalesTim-darkslateblue?logo=microsoft-teams&logoColor=white&style=for-the-badge)
</a>

Learn more about our [validation rings](./releases.md#validation-rings) and our [versioning strategy](./releases.md#versioning-strategy)

## Install in your corporate app catalog

### Standalone package

This "standalone" package is a personal Microsoft Teams app comprised of 3 tabs (🏠 Home, 📚 Catalog and ⚙ Settings).

| Package name | Download link |
|--------------|---------------|
| SalesTim Standalone | [![](https://img.shields.io/badge/Microsoft_Teams-Download_SalesTim_Standalone_Package-darkslateblue?logo=microsoft-teams&logoColor=white&style=flat)](https://dist.salestim.com/packages/io.salestim.automation.standalone.prd.zip) |

::: tip
Deployment procedure: [Install SalesTim in Microsoft Teams](https://help.salestim.com/articles/3505270-install-salestim-app-on-microsoft-teams)
:::

### Targeted packages

| Package name | Download link |
|--------------|---------------|
| SalesTim Home | [![](https://img.shields.io/badge/Microsoft_Teams-Download_SalesTim_Home_Package-darkslateblue?logo=microsoft-teams&logoColor=white&style=flat)](https://dist.salestim.com/packages/io.salestim.automation.targeted.home.prd.zip) |
| SalesTim Catalog | [![](https://img.shields.io/badge/Microsoft_Teams-Download_SalesTim_Catalog_Package-darkslateblue?logo=microsoft-teams&logoColor=white&style=flat)](https://dist.salestim.com/packages/io.salestim.automation.targeted.catalog.prd.zip) |
| SalesTim Settings | [![](https://img.shields.io/badge/Microsoft_Teams-Download_SalesTim_Settings_Package-darkslateblue?logo=microsoft-teams&logoColor=white&style=flat)](https://dist.salestim.com/packages/io.salestim.automation.targeted.settings.prd.zip) |

::: tip Deployment procedure
[Setup pinned apps](https://help.salestim.com/articles/3507463-set-up-the-home-page)
:::

## Validation rings

Our release process is comprised of multiple "rings" of validation that are related to specific environments, to a specific audience and a specific compliance labeling level:

| 💍 Ring | Environments | Primary Audience | Purpose |
|:-------:|--------------|------------------|---------|
| **4** | **production** | Customers (All) | Obvious isn't it? ;-) |
| **3.5** | **staging** | SalesTim | Test automated deployments and upgrades in an iso-production environment |
| **3** | **beta** | Customers (Preview) | Preview environment designed to help some customers prepare for updates, from a technical and change management standpoint |
| **2** | **uat** | SalesTim (Product Team) | The product team tests SalesTim to verify whether it meets their expectations |
| **1.5** | **alpha** | Partners (SI/ISV) | Give strategic partners an early look at the features we're currently working on |
| **1** | **dogfood** | SalesTim | SalesTim Internal [Dogfooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) |
| **0** | **integration** | SalesTim (Tech Team) | Integrations and functional testing by the tech team |

Using this kind of rings has many advantages:
* Clear and common understanding of each ring purpose
* Separation of concerns
* Real isolation between environments
* Enforced security


## Versioning strategy

SalesTim versioning strategy adheres to [Semantic Versioning](https://semver.org/).  
A version number may be comprised of 3 to 4 components and takes this form:
```
MAJOR.MINOR.PATCH-BUILD
```

Meaning of each component:
  * MAJOR: version that includes incompatible changes (data schema, api signatures...)
  * MINOR: version that includes functionality in a backwards-compatible manner
  * PATCH: version that includes backwards-compatible bug fixes
  * BUILD: incremental development-only version
