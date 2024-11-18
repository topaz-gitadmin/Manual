---
title: Manual
sidebar_position: 1
sidebar_class_name: 'nav-det-level'
---

# <span className="fusion5-text">Import from Excel</span>

## **Overview**

The Import from Excel extension enables import of data in Business Central using templates created in Microsoft Excel. This includes importing Master Data as well as Transactional Data, such as Sales Documents, Purchase Documents, and Journals.  

This extension supports both "static imports" with predefined file formats for Master Data and General Journals; and "dynamic imports" for Journals and Purchase/Sales Documents, allowing users to create custom templates based on their specific Excel formats.

## **Dynamic Imports**
Users can create custom templates in Microsoft Excel based on file formats from external systems and specify how data should be managed during import. When defining dynamic import codes, column definitions can be directly imported from these templates, streamlining the setup process. Users can then map the column data to the relevant fields in Business Central documents or journals and set default values for any required information missing from the file. 

Templates can be set up to: 

- Import data to General Journals
- Create or update Purchase Invoices and Credit Memos
- Create or update Sales Invoices and Credit Memos

NB: Dynamic Imports are used to import documents and journals. For import of Master Data, Static Import should be used.

### **Setting up Dynamic Import Codes**

To use Dynamic Imports, you first need to set up Dynamic Import Codes. These can be created to import Purchase Documents, Sales Documents and Journals.


Go to **Dynamic Import Codes**. This is accessible from the following places:
-	Search > **Dynamic Import Codes**
-	From General Journal > Home > **Dynamic Import Codes**
-	From the Purchase Invoice list > Home > **Dynamic Import Codes**
-	From the Sales Invoice list > Home > **Dynamic Import Codes**


![Access Dynamic Import Codes.png](.img/Access%20Dynamic%20Import%20Codes-860816bc-6693-43b9-b4b9-ace4a7f8c9a7.png)

To create new dynamic import code enter the following information:

-   **Code** - User definable code to specify import layout
-   **Import Type** - Select from General journal, Purchase Document or Sales Document
-   **Description** - User definable description to define import layout
-   **Excel Row of First Data Line** - Line Number for first journal line in excel where data to be imported starts

![Dynamic Import Codes.png](.img/Dynamic%20Import%20Codes-00887158-498f-4dae-bc38-8a5e133364aa.png)



Select **Import Columns from File** to import and setup columns from an excel file. Map these columns to corresponding journal fields:

- **Excel Column No** – Column No from Excel or manually entered no. after the excel column numbers
- **Excel Content** – Column heading from excel if Imported or blank for defaults
- **Journal Import Field Name** – General Journal field.  This is a drop down list of all available files to allow the  user to create there own custom mapping.
- **Default Value** – Default Value to include in integration if not provided by excel mapping
- **Transformation Rule** – look up to the standard transformation rules and select relevant rule for the field (ie TITLECASE will capitalize the first letter of each word)


**Sample Excel File Layout**

An example of an Excel file with corresponding mapping is provided below. Where the Excel file does not contain values a default value has been mapped for the same. 

**Please note** that the default value is applied to all transactions and lines contained in the Excel template.

![Sample File Layout.png](.img/Sample%20File%20Layout-4f706de0-4564-448f-af9c-830f7b25e9a4.png)

**Dynamic Import Code Mapping**

![Dynamic Import Code Columns.png](.img/Dynamic%20Import%20Code%20Columns-81f56863-e18a-476e-ad47-965ec73f5636.png)




#### **Dynamic General Journal Template - Field Selection** 

When creating a **Dynamic Import Code** template to import General Journals the field selections are as follow:

_**Mandatory Fields**_

The following fields are Mandatory and must be included in the excel file or have a default value supplied in the column mapping.

- **Journal Template Name** - Standard Dynamics BC template name to define type of journal. **(*)**
- **Journal Batch Name** - Batch Name must already exist.  **(*)**
- **Posting Date** - Journal Posting Date.
- **Account Type** - Account Type for Journal Line.  **(*)**
- **Account No.** - Number based on account type.  **(*)**
- **Amount** - Value for Journal.
- **Document No.** - this is only mandatory if the no. series is not specified on the journal template or batch.

**(*)** Values provided under these columns must be defined in Business Central, else an error message will be displayed on import.

_**Optional Fields**_

All optional fields can be supplied in the import mapping or left to default in the same way as a manually entered journal.

- **Document No.**
- **Description**
- **Shortcut Dimensions 1-8** - Global and Shortcut dimensions can be included in the template as separate columns based on the dimension setup for the company
- **Bal. Account Type**
- **Bal. Account No.**
- **Document Date**
- **Document Type**
- **External Document No.**
- **FA Posting Type**
- **Gen. Posting Type**
- **Gen. Prod. Posting Group**
- **Gen. Bus. Posting Group**
- **GST Bus. Posting Group**
- **GST Prod. Posting Group**
- **GST Amount**
- **Project Line Type**
- **Project No.**
- **Project Quantity**
- **Project Task No.**
- **Project Unit Cost**
- **Project Unit Price**
- **Recurring Frequency**
- **Recurring Method**



#### **Field Selection for Dynamic Purchase Document Templates**

When creating a **Dynamic Import Code** template to import Purchase Invoices and Credit Memos the field selections are as follow:


**_Mandatory Fields_** for Purchase Document. **(Hdr)** is for Header fields and **(Line)** is for the lines:
- **Document No. (Hdr)**
- **Buy from Vendor No. (Hdr)**
- **Vendor Invoice No. (Hdr) or Vendor Credit Memo No. (Hdr)**
- **Posting Date (Hdr)**
- **Type (Line)**
- **No. (Line)**
- **Quantity (Line)**
- **Direct Unit Cost (Line)**

**NB**: If Mandatory fields are not in the excel file, add additional lines below the excel fields; populate Excel column no, Import Field name and Default Value (such as Account Type in screenshot above)

_**Optional Fields**_

- **Dimensions 1-8 (Hdr)**
- **Due Date (Hdr)**
- **Buy-from Vendor Name (Hdr)**
- **Buy-from Address (Hdr)**
- **Buy-from Address 2 (Hdr)**
- **Buy-from Contact No. (Hdr)**
- **Buy-from Post Code (Hdr)**
- **Currency Code (Hdr)**
- **Document Date (Hdr)**
- **Pay-to Vendor No. (Hdr)**
- **Posting No. (Hdr)** - If you require the posted invoice to have a specific posted document number
- **Description (Line)**
- **Description 2 (Line)**
- **Dimensions 1-8 (Line)**
- **IC Partner Code (Line)**
- **IC Ref. Type (Line)**
- **IC Reference (Line)**
- **Gen. Prod. Posting Group**
- **GST Prod. Posting Group**
- **Project No.**
- **Project Planning Line No.**
- **Project Task No.**

#### **Field Selection for Dynamic Sales Document Templates**

When creating a **Dynamic Import Code** template to import Sales Invoices and Credit Memos the field selections are as follow:


**_Mandatory Fields_** for Sales Document. **(Hdr)** is for Header fields and **(Line)** is for the lines:

- **Sell-to Customer No. (Hdr)**
- **Document Date (Hdr)**
- **Document Type (Hdr)**
- **External Document No. (Hdr)** - If mandatory in Sales & Receivables setup
- **Posting Date (Hdr)**
- **Type (Line)**
- **No. (Line)**
- **Quantity (Line)**
- **Unit Price (Line)**


_**Optional Fields**_

- **Bill-to Customer No. (Hdr)**
- **Dimensions 1-8 (Hdr)**
- **Document Date (Hdr)**
- **Due Date (Hdr)**
- **External Document No. (Hdr)** - If not mandatory in Sales & Receivables setup
- **Payment Discount % (Hdr)**
- **Payment Terms Code (Hdr)**
- **Posting No. (Hdr)** - If you require the posted invoice to have a specific posted document number
- **Posting Description (Hdr)**
- **Salesperson Code (Hdr)**
- **Currency Code (Hdr)**
- **Sell-to Contact No. (Hdr)**
- **Description (Line)**
- **Description 2 (Line)**
- **Dimensions 1-8 (Line)**
- **Gen. Prod. Posting Group (Line)**
- **GST Prod. Posting Group (Line)**
- **Return Reason Code (Line)**
- **Work Type Code (Line)**


### **Import Documents/Journals using Dynamic Import Codes**

To import Journals and Documents using the Dynamic Import Codes; go to **Import from Excel with Dynamic columns**.  This is accessible from the following places:
-	Search > **Import from Excel with Dynamic Columns**
-	From General Journal > Home > **Import from Excel with Dynamic Columns**
-	From the Purchase Invoice list > Home > **Import from Excel with Dynamic Columns**
-	From the Sales Invoice list > Home > **Import from Excel with Dynamic Columns**


![Import from Excel function.png](.img/Import%20from%20Excel%20function-405986d5-0f47-468f-9515-d52caa045516.png)

Enter required information on the request form:

- **Import Type** - Select relevant option: General Journal, Purchase Document, Sales Document. If the Import from Excel function is chosen from General Journal/Purchase Invoice list/Sales Invoice List, the Import Type will be populated with the correct type for it.
- **Import Code** - Select the required import code as defined above; please note this will be pre-populated with the first relevant code for the Import Type selected above.
- **Override Posting Date** – Populate with date to override the posting date, or leave blank to import date from file
- **Override Journal Template** – Select a value from the dropdown to override the journal template value in file (only relevant for journals)
- **Override Journal Batch** - Select a value from the dropdown to override journal batch in file (only relevant for journals)
- **Write Option** – Select option:
  - Append to add to existing lines on journal batch, purchase invoice or sales invoice
  - Overwrite to replace lines on journal batch, purchase invoice or sales invoice (NB: This is possible on Purchase/Sales Documents only if a Document No. is supplied in the Excel Template)
-  **Choose Excel File** - This opens the standard Microsoft File selection utility. Navigate to the required file for import.  NB: if multiple worksheets are available in the workbook an option to select worksheet will pop up.


![Dynamic Import Request Page.png](.img/Dynamic%20Import%20Request%20Page-04e7ca76-3a14-4bf0-ad4d-72d7531da675.png)
-   **Workbook File Name** - Displays the Workbook name to be imported

-   **Worksheet Name** - Displays the Worksheet being imported from

### **Posting**

Navigate to the desired Journal template/batch or go to the Sales Invoice or Purchase Invoice list page.

Journal can be posted as per standard journal posting routines. Documents can be reviewed or posted.

## **Static Imports**

Static Data imports use a specified format and are designed for importing substantial amounts of Master, as well as some transactional data. 

At present it includes import into the tables listed below:

- G/L Journal
- Items
- Resources
- Vendors
- Customers
- Fixed Assets
- FA Journals
- Jobs/Tasks
- Job Journal
- Job Budgets
- User Roles
- Dimensions
- Purchase Invoice/Credit

NB: Shortcut dimensions have been included in the templates and can be imported within the static data imports.

You can locate these Static Imports by searching for "Import from Excel"

1. __Import G/L Journal from Excel:__ Allows users to import General Ledger journal entries, including account codes, descriptions, posting dates and amounts from an Excel file.
 1. __Import G/L Accounts from Excel:__ Enables the import of General Ledger account information, including account codes, descriptions, and account types from an Excel file.
1. __Import Item from Excel:__ Allows users to import item data, including item codes, descriptions, prices, and other details, directly from an Excel file into the system.
 1. __Import Item Journal from Excel:__ Enables the import of item journal entries, including item codes, descriptions, quantities, and values from an Excel file.
 1. __Import Resources from Excel:__ Facilitates the import of resource information from an Excel spreadsheet.
 1. __Import Vendors from Excel:__ Enables the import of vendor details, including vendor names, addresses, payment terms, posting groups and other data from an Excel file.
 1. __Import Customers from Excel:__ Allows users to import customer data, including customer names, addresses, payment terms, posting groups and other data from an Excel file.
 1. __Import Fixed Assets from Excel:__ Allows users to import fixed asset information, including asset codes, descriptions and classification from an Excel file.
 1. __Import FA Journal from Excel:__ Facilitates the import of Fixed Assets journal entries, including asset codes, posting dates, and values from an Excel spreadsheet.
 1. __Import Job/Tasks from Excel:__ Enables the import of job and task details, such as job codes, job descriptions, job tasks, bill to customer, and start and end dates from an Excel file.
 1. __Import Job Journal from Excel:__ Facilitates the import of job journal entries, including job codes, posting date, quantity, cost and price from an Excel spreadsheet.
 1. __Import Job Budgets from Excel:__ Facilitates the import of job budget details, including job codes, budgeted costs, and revenues from an Excel spreadsheet.
 1. __Import Access Controls from Excel:__ Allows users to import access control settings, including approval user, approval group and limit from an Excel file.
 1. __Import Dimension Values from Excel:__ Facilitates the import of dimension values, including dimension codes, dimension values and descriptions from an Excel spreadsheet.

### **Import G/L Journal from Excel**

This function allows users to import G/L Journals from Excel using a pre-defined excel template file.

- Go to **Import G/L Journal from Excel**

![Import Journal from Excel 2.png](.img/Import%20Journal%20from%20Excel%202-293a16c1-6e6d-4f2d-a83e-894071f78864.png)

- Set **Choose Excel File** to True, and select the file you want to import
- To view the required file layout set **Help (File Layout)** to True 
- Click **OK**
- Go to the **General Journal Batch** as specified in your import template to review and post the journal

![image6.png](.img/image6-27421b85-8b1f-4386-b86e-ca4109f3ab81.png)

- Once reviewed, you can post the journal.

**Template for G/L Journal Excel Import**

Each of our Excel Import functions has a **Help (File Layout)** option, where the system will tell you what each column should be for that specific import function. You should design your data import using this to define the column layout:

![image7.png](.img/image7-a6b4149f-5a5f-40af-b09c-2866bcdcdc53.png)

Please note: 
- This screenshot does not contain all fields in template - please run the **Import G/L Journal from Excel** function, and set the **Help (File Layout)** to True to see remaining fields.

![Import GL Journal Help.png](.img/Import%20GL%20Journal%20Help-7ffb662a-d547-4bd3-861b-e5f7327dad47.png)

### **Import G/L Accounts from Excel**

This function allows users to import G/L Accounts from Excel using a pre-defined excel template file.

- Search for **Import G/L Accounts from Excel**
![Import GL Accounts.png](.img/Import%20GL%20Accounts-44d2a3f8-1353-406d-9e32-78189e30dcd7.png)

- Set **Choose Excel File** to True, and select the file that you want to import
- To view the required file layout set **Help (File Layout)** to True 
- Click **OK**
- Go to the G/L Account List to review your new G/L Accounts

**Template for G/L Accounts Excel Import**

The Import from Excel **Help (File Layout)** option will tell you what each column should be for the specific import function. You should design your data import using this to define the column layout:

![GL Account Template.png](.img/GL%20Account%20Template-3436e02b-d2dc-4647-b1da-7c8ad9bd5775.png)

Please note: 
- If a G/L Account exists with the same number, then their details will be overwritten.

### **Import Items from Excel**

This function allows users to import Items from Excel using a pre-defined excel template file.

- Search for **Import Items from Excel**

![Import Item Request.png](.img/Import%20Item%20Request-9085ff5c-df22-4182-b88e-12dbfcc213d3.png)

- Set **Choose Excel File** to True, and select the file that you want to import
- To view the required file layout set **Help (File Layout)** to True 
- Click **OK**
- Go to the Item List to review your new Items

**Template for Items Excel Import**

The Import from Excel **Help (File Layout)** option will tell you what each column should be for the specific import function. You should design your data import using this to define the column layout:



![Item Template.png](.img/Item%20Template-03559142-5f9e-44ea-ad66-af8e115822c3.png)

Please note: 
- This screenshot does not contain all fields in template - please run **Import Item from Excel** function, and set the **Help (File Layout)** to True to see remaining fields.
- If an Item exists with the same number, then their details will be overwritten.

### **Import Item Journals from Excel**

This function allows users to import Item Journals from Excel using a pre-defined excel template file.

- Search for **Import Item Journals from Excel**

![Import item journal.png](.img/Import%20item%20journal-9c8ce592-d681-40f5-ac85-8e8c349701ea.png)


- Set **Choose Excel File** to True, and select the file that you want to import
- To view the required file layout set **Help (File Layout)** to True 
- Click **OK**
- Go to the Item Journal List to review your new Item Journals

**Template for Item Journals Excel Import**

The Import from Excel **Help (File Layout)** option will tell you what each column should be for the specific import function. You should design your data import using this to define the column layout:

![Item Journal Template.png](.img/Item%20Journal%20Template-74fd9348-417d-4b2f-b5e1-1f20f634fdec.png)

Please note: 
- This screenshot does not contain all fields in template - please run **Import Item Journals from Excel** function, and set the **Help (File Layout)** to True to see remaining fields.
- If a Item Journal exists with the same number, then their details will be overwritten.

### **Import Resources from Excel**

This function allows users to import Resources from Excel using a pre-defined excel template file.

- Go to **Import Resources from Excel**

![Import Resources from Excel.png](.img/Import%20Resources%20from%20Excel-9156e121-6848-4bbb-abde-b512e77351e5.png)


- Set **Choose Excel File** to True, and select the file that you want to import
- To view the required file layout set **Help (File Layout)** to True 
- Click **OK**
- Go to the Resource List to review your new Resources

**Template for Resource Excel Import**

The Resource Excel Import function **Help (File Layout)** option will tell you what each column should be for the specific import function. You should design your data import using this to define the column layout:



![Resource Template.png](.img/Resource%20Template-18f021ea-a0e7-472c-b01a-f88ebb0125bf.png)


- Please note if a Resource exists with the same number then their details will be overwritten.

### **Import Vendor from Excel**

This function allows users to import Vendors from Excel using a pre-defined excel template file.

- Go to **Import Vendors from Excel**


![Import Vendors from excel.png](.img/Import%20Vendors%20from%20excel-3e648a9c-b5cf-4d46-b5c1-91fb8d83819c.png)

- Set **Choose Excel File** to True, and select the file that you want to import
- To view the required file layout set **Help (File Layout)** to True 
- Click **OK**
- Go to the Vendor List to review your new Vendors

**Template for Vendors Excel Import**

The Vendor Excel Import functions **Help (File Layout)** option will tell you what each column should be for the specific import function. You should design your data import using this to define the column layout:



![Vendor Template.png](.img/Vendor%20Template-6963ce68-03ce-441c-a678-0f16ac328739.png)


Please note: 
- This screenshot does not contain all fields in template - please run **Import Vendor from Excel** function, and set the **Help (File Layout)** to True to see remaining fields.
- If a Vendor exists with the same number then their details will be overwritten.

### **Import Customers from Excel**

This function allows users to import Customers from Excel using a pre-defined excel template file.

- Go to **Import Customers from Excel**


![Import Customers from Excel.png](.img/Import%20Customers%20from%20Excel-76603690-8d59-4850-b888-7f4ab5d57454.png)

- Set **Choose Excel File** to True, and select the file that you want to import
- To view the required file layout set **Help (File Layout)** to True 
- Click **OK**
- Go to the Customer List to review your new Customers

**Template for Customer Excel Import**

The Customer Excel Import functions **Help (File Layout)** option will tell you what each column should be for the specific import function. You should design your data import using this to define the column layout:



![Customer Template.png](.img/Customer%20Template-7eb6427c-6f15-44f4-8f3c-39e44b41942a.png)

Please note: 
- This screenshot does not contain all fields in template - please run **Import Customer from Excel** function, and set the **Help (File Layout)** to True to see remaining fields.
- If a Customer exists with the same number then their details will be overwritten.

### **Import Fixed Assets from Excel**

This function allows users to import Fixed Assets from Excel using a pre-defined excel template file.

- Search for **Import Fixed Assets from Excel**

![Import Fixed Assets from Excel v1.xlsx.png](.img/Import%20Fixed%20Assets%20from%20Excel%20v1.xlsx-925dab8f-4295-4233-b8e6-126923966b8c.png)

- Set **Choose Excel File** to True, and select the file that you want to import
- To view the required file layout set **Help (File Layout)** to True 
- Click **OK**
- Go to the Fixed Asset List to review your new Fixed Assets

**Template for Fixed Assets Excel Import**

The Import from Excel **Help (File Layout)** option will tell you what each column should be for the specific import function. You should design your data import using this to define the column layout:

![Fixed Asset Tempate.png](.img/Fixed%20Asset%20Tempate-f2dc8e82-7bf2-4f44-b785-689347fa65b5.png)

Please note: 
- This screenshot does not contain all fields in template - please run **Import Fixed Assets from Excel** function, and set the **Help (File Layout)** to True to see remaining fields.
- If a Fixed Asset exists with the same number, then their details will be overwritten.

### **Import FA Journal from Excel**

This function allows users to import FA Journals from Excel using a pre-defined excel template file.

- Go to **Import FA Journals from Excel**


![image.png](.img/image-eeffc7d7-9d5b-4668-84bf-3dfcb154c2c1.png)

- Set **Choose Excel File** to True, and select the file that you want to import
- To view the required file layout set **Help (File Layout)** to True 
- Click **OK**
- Go to the FA Journal to review your new journal entries

**Template for FA Journal Excel Import**

The FA Journal Excel Import functions **Help (File Layout)** option will tell you what each column should be for the specific import function. You should design your data import using this to define the column layout:



![FA journal Template.png](.img/FA%20journal%20Template-8f9f289e-93fd-4d95-96bb-0d6701b83bf4.png)

### **Import Jobs/Tasks from Excel**

This function allows users to import Jobs/Tasks from Excel using a pre-defined excel template file.

- Go to **Import Jobs/Tasks from Excel**


![Import Jobs from Excel.png](.img/Import%20Jobs%20from%20Excel-bc33c64b-b2f1-4759-ac20-a6a05abc08a5.png)

- Set **Choose Excel File** to True, and select the file that you want to import
- To view the required file layout set **Help (File Layout)** to True 
- Click **OK**
- Go to Projects to review your new entries

**Template for Jobs/Tasks Excel Import**

The Jobs/Tasks Excel Import functions **Help (File Layout)** option will tell you what each column should be for the specific import function. You should design your data import using this to define the column layout:



![Jobs Template.png](.img/Jobs%20Template-7be421fa-b3a4-4894-ac98-67599d03f16e.png)


Please note:
- If a Project/Job/Task exists with the same number then their details will be overwritten.



### **Import Job Journals from Excel**

This function allows users to import Job Journals from Excel using a pre-defined excel template file.

- Search for **Import Job Journals from Excel**

![Import Job Journal.png](.img/Import%20Job%20Journal-f72ad287-1060-4635-a6f9-38f73d080e3b.png)

- Set **Choose Excel File** to True, and select the file that you want to import
- To view the required file layout set **Help (File Layout)** to True 
- Click **OK**
- Go to the Job Journal List to review your new Job Journals

**Template for Job Journals Excel Import**

The Import from Excel **Help (File Layout)** option will tell you what each column should be for the specific import function. You should design your data import using this to define the column layout:

![Job Journal Template.png](.img/Job%20Journal%20Template-b2e92d00-ebaa-467e-8f1a-a3fcc202d40c.png)

Please note: 
- This screenshot does not contain all fields in template - please run **Import Job Journals from Excel** function, and set the **Help (File Layout)** to True to see remaining fields.
- If a Job Journal exists with the same number, then their details will be overwritten.



### **Import Job Budgets from Excel**

This function allows users to import Job Budgets from Excel using a pre-defined excel template file.

- Search for **Import Job Budgets from Excel**

![Import Job Budgets.png](.img/Import%20Job%20Budgets-5c792811-baa1-4087-ae28-27331878b830.png)

- Set **Choose Excel File** to True, and select the file that you want to import
- To view the required file layout set **Help (File Layout)** to True 
- Click **OK**
- Go to the Job Budget List to review your new Job Budgets

**Template for Job Budgets Excel Import**

The Import from Excel **Help (File Layout)** option will tell you what each column should be for the specific import function. You should design your data import using this to define the column layout:

![Job Budget Template.png](.img/Job%20Budget%20Template-0db51545-cd97-4f10-8917-6525fc99cd4f.png)

Please note: 
- This screenshot does not contain all fields in template - please run **Import Job Budgets from Excel** function, and set the **Help (File Layout)** to True to see remaining fields.
- If a Job Budget exists with the same number, then their details will be overwritten.

### **Import User Roles from Excel**

This function allows users to import additional User Role associations from Excel using a pre-defined excel template file.

- Search for **Import User Roles from Excel**

![Import User Roles.PNG](.img/UserRoles-3a690b57-6dee-4b61-9391-8c3522196267.PNG)

- Set **Choose Excel File** to True, and select the file that you want to import
- To view the required file layout set **Help (File Layout)** to True 
- Click **OK**
- Go to the User List to review your new User Role associations

**Template for User Roles Excel Import**

The Import from Excel **Help (File Layout)** option will tell you what each column should be for the specific import function. You should design your data import using this to define the column layout:

![UserRolesHelp.png](.img/UserRolesHelp-332cfe4e-93d9-4fee-9746-db1c42a877c8.png)

### **Import Dimension Values from Excel**

This function allows users to import Dimension Values from Excel using a pre-defined excel template file.

- Search for **Import Dimension Values from Excel**

![Import Dimension Values.png](.img/Import%20Dimension%20Values-21c55f95-5a9d-48a2-9476-ffb4a6c2622c.png)

- Set **Choose Excel File** to True, and select the file that you want to import
- To view the required file layout set **Help (File Layout)** to True 
- Click **OK**
- Go to the Dimension Value List to review your new Dimension Values

**Template for Dimension Values Excel Import**

The Import from Excel **Help (File Layout)** option will tell you what each column should be for the specific import function. You should design your data import using this to define the column layout:

![Dimension Values Template.png](.img/Dimension%20Values%20Template-d93327b5-1fc3-49bc-b673-00e46b0c96cc.png)

Please note: 
- If a Dimension Value exists with the same number, then their details will be overwritten.

