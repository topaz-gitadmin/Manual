---
title: Manual
sidebar_position: 1
sidebar_class_name: 'nav-det-level'
---

# <span className="fusion5-text">Azure Blob Storage Document Attachments</span>

## Introduction

Extension to Selectively Store Document Attachments in your Azure Blob Storage to keep control on your Storage Capacity.

## Setup

Search for "ASB Attachments Setup" to define your Azure Blob Storage location and the Document Attachments they apply to filtered by the Table/Document Type.

![List](.img/n05.setup01.PNG)

You can define multiple setups but only have one active for a specific scenario at a time.

_Note:_ If no enabled applicable setup exists the system will fallback to the standard Media storage approach.

![Card](.img/n05.setup02.PNG)

If no Table is selected the setup will be applied to ALL attachment sources. This default setup will be superseded by any more specific setup.

If a Document Type needs to defined for the Table the respective field will be made available in the setup.

![Table Selection](.img/n05.setup03.PNG)

Only enabled Setups are applied/considered for new Attachments.

As soon as a Document Attachment has been created for a given setup the details can not be adjusted anymore. If you want to change the storage location or details simply disable the existing settings and create a new setup for sup sequent Attached Documents. Old documents will still be accessed through the disabled setup.

## Copy Environments

When copying an environment the linked attachment blobs are __not__ duplicated but the existing setups will be locked in the copied database. Not allowing deleting any actual Documents from the Blob Storage nor adding new ones to the same setup.
If the Attachment is removed in the original environment it will not be available anymore in the copy as well.

A new setup will need to be created for adding new attachments to a blob storage in the copy.

All Azure Access keys are lost in the copying and will need to be entered again for accessing Attachment blobs from the originating environment.








