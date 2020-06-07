---
title: "Key concepts for working with SalesTim API"
description: "This article describes the key concepts for working with SalesTim API, such as the template catalog, the template store and provisioning jobs"
---

## Key concepts for working with SalesTim API
<Classification label="public" />

---

**TABLE OF CONTENTS**  
[[toc]]

---

This article describes the key concepts for working with SalesTim API, such as teams templates, the template catalog, the template store and provisioning jobs.

## Templates
Templates are at the core of the SalesTim platform. As a rule of thumb, templates are a combination of two elements:
- A team template, describing the structure and contents of a team.
- A governance policy that may include security and compliance rules.

A template may be created by yourself and saved in your private corporate catalog for internal use. We call this kind of template `Catalog Template`.

:::tip Learn more
- See [How to create a new template](https://help.salestim.com/collections/2021774-build-your-microsoft-teams-templates) from our [Help Center](https://help.salestim.com)
- See [How to apply governance policies](https://help.salestim.com/collections/2036258-governance-policies)
:::

A template may also be public and accessible for free from the Microsoft Teams [Template Store](https://store.salestim.com). We call this kind of template `Store Template`
:::tip Learn more
See our open source GitHub repository [@salestim/template-manifests](https://github.com/SalesTim/template-manifests) to learn how to publish your own template to the template store.
:::

## Template Store
The [Template Store](https://store.salestim.com) is a public website that offers Microsoft Teams templates, that can be installed in just a few clicks in your private corporate catalog.
The templates are free, curated and controlled by our team before publication to guarantee the best value and ensure a high level of security.

The template store relies on an open source GitHub repository [@salestim/template-manifests](https://github.com/SalesTim/template-manifests), that contains all the public templates definitions (also called `manifests`).

## Corporate Catalog
The corporate catalog contains your own private templates, accessible to your end-users, that includes your custom governance policies, such as:
- Naming conventions
- Audience targeting
- Approval rules
- Security automation
- Classification labels

## Virtual Apps
Virtual apps are plugins that consume the SalesTim API in a secure and dedicated environment. They are registered and controlled by the SalesTim administrators.

Especially, virtual apps can read your corporate catalog of templates and start jobs using our provisioning and governance engine, enabling powerful scenarios such as:
- Create powerful self-service templates for Microsoft Teams
- Deploy Microsoft Planner at scale with plans templates
- Create a custom approval process for your teams provisioning requests
- Apply automaticaly governance policies across all your teams
- Integrate a custom in-house and LoB apps with Microsoft Teams

## Jobs
Jobs are governance tasks executed by the SalesTim Platform automation engine.

Jobs can be requested by the SalesTim administrators, catalog managers and virtual apps, to perform powerful operations such as:
- Provision a new team based on a template
- Apply governance policies to multiple teams
- Automatically archive teams based on a specific rule
