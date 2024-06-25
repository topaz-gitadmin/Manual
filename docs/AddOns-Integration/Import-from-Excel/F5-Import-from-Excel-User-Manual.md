[[_TOC_]]

Overview
========

This Journal Import utility allows users to import the following
Dynamics BC records from Microsoft Excel.

Import G/L Journal from Excel
=============================

This function allows users to import G/L Journals from Excel using a
pre-defined excel template file.

Go to **Import G/L Journal from Excel**

![image3.png](img/image3-9038d1e2-8f7c-4be2-9583-36557f69af94.png)

Click on **Choose Excel File** when prompted, choose the Sheet you want
to import and click **OK**

![image4.png](img/image4-dd6fb89d-fb20-4f6c-8280-f81a5c03c952.png)

The Import Options will be updated as per your import template, click
**OK**

![image5.png](img/image5-1df567f3-d65f-4b0f-8d31-086b4221c44b.png)

Go to the General Journal Batch as specified in your import template to
review and post the journal

![image6.png](img/image6-27421b85-8b1f-4386-b86e-ca4109f3ab81.png)

Once reviewed, you can post the journal.

Creating Templates for Excel Import
-----------------------------------

Each of our Excel Import functions has a **Help (File Layout)** option,
where the system will tell you what each column should be for that
specific import function. You can use this to create your own templates:

![image7.png](img/image7-a6b4149f-5a5f-40af-b09c-2866bcdcdc53.png)

Import G/L Journal from Excel with Dynamic Columns
==================================================

This allows users to import G/L Journal transaction from Excel using a
User Definable excel format.

Dynamic Import Codes
--------------------

Go to **Dynamic Import Codes**

![image8.png](img/image8-4ce24868-ca50-4ff5-af3b-54338237eca6.png)

-   **Journal Code -- User definable code to define import layout**

-   **Import Type -- Options to create General journal, Sales or
    Purchase Invoices**

-   **Description -- User definable description to define import
    layout**

-   **Excel Row of First Data Line -- Line Number for first journal line
    in excel where data to be imported starts**

**Actions from the Ribbon**

-   **New -- Create new Layout**

-   **Delete -- Delete a Layout**

```{=html}
<!-- -->
```
-   **Import Columns from File -- Selected Excel file template for
    import to create required column layouts**

**Sample Excel File Layout**

![image9.png](img/image9-eebbb5b5-c93c-497d-8eee-123e1ba02b8d.png)

![image10.png](img/image10-d45250e9-530d-4ffc-9a83-16b131aeed7a.png)

-   **Excel Column No -- Column No from Excel**

-   **Excel Content -- Column heading from excel if Imported or manually
    entered No.**

-   **Journal Import Field Name -- General Journal field. This is a drop
    down list of all available files to allow the user to create there
    own custom mapping.**

-   **Default Value -- Default Value to include in integration of not
    provided by excel mapping**

**Mandatory Fields for Journal**

**The following fields are Mandatory and must be included in the excel
file or have a default value supplied.**

**JOURNAL TEMPLATE NAME - Standard Dynamics BC template name to define
type of journal.**

**JOURNAL BATCH NAME - Batch Name must already exist.**

**POSTING DATE -- Journal Posting Date.**

**ACCOUNT TYPE -- Account Type for Journal Line.**

**ACCOUNT NO -- Number based on account type.**

**AMOUNT -- Value for Journal.**

**Optional Fields**

**All optional fields can be supplied in the import mapping or left to
default in the same way as a manually entered journal.**

**DOCUMENT NO.**

**DESCRIPTION**

**DIMENSION**

**BAL. ACCOUNT TYPE**

**BAL. ACCOUNT NO.**

**DOCUMENT DATE**

**DOCUMENT TYPE**

**EXTERNAL DOCUMENT NO.**

**FA POSTING TYPE**

**GEN. POSTING TYPE**

**GEN. PROD. POSTING GROUP**

**GST BUS. POSTING GROUP**

**GST PROD. POSTING GROUP**

**JOB LINE TYPE**

**JOB NO.**

**JOB QUANTITY**

**JOB TASK NO.**

**JOB UNIT COST**

**JOB UNIT PRICE**

**RECURRING FREQUENCY**

**RECURRING METHOD**

**Mandatory Fields for Purchase Document (H\* is for Header fields and
L\* is for the lines**

**H.DOCUMENT NO.**

**H.VENDOR NO.**

**H.VENDOR INVOICE NO. or H.VENDOR CREDIT MEMO NO**

**H. POSTING DATE**

**L.TYPE**

**L.NO.**

L.QUANTITY

L.DIRECT UNIT COST

**Optional Fields**

H. DIMENSION 1 to 8

H. DOCUMENT TYPE

H. DUE DATE

H. PAY TO VENDOR

H. VENDOR NAME

H. ADDRESS 1

H. ADDRESS 2

H. POSTCODE

H. BUY-FROM CONTACT

L. DESCRIPTION

L. DIMENSION 1 TO 8

L. GEN PROD POSTING GROUP

L. GST PROD POSTING GROUP

L. JOB NO

L. JOB TASK NO

L. JOB PLANNING LINE NO

**Mandatory Fields for Sales Document (H\* is for Header fields and L\*
is for the lines**

H.CUSTOMER NO.

H.DOCUMENT DATE

H.DOCUMENT TYPE

H.EXTERNAL DOCUMENT NO

H.POSTING DATE

L.NO.

L.QUANTITY

L. TYPE

L.UNIT PRICE

**Optional Fields**

H.BILL-TO CUSTOMER NO.

H. DIMENSION 1 TO 8

H.DOCUMENT DATE

H.DUE DATE

H.EXTERNAL DOCUMENT NO

H. SELL-TO CONTACT

L. DESCRIPTION

L. DIMENSION 1 TO 8

L.GEN. PROD. POSTING GROUP

L.GST PROD. POSTING GROUP

Journal Import
--------------

Go to **Import from Excel with Dynamic columns**

![image11.png](img/image11-1c2a4a18-e84e-41cf-93f5-d24af00401cc.png)

-   **Import Code-- Select the required import code as defined above**

-   **Choose Excel File**-- This opens the standard Microsoft File
    selection utility. Navigate to the required file for import

![image12.png](img/image12-8fa92d93-c35c-4225-905b-8297b29a5b7f.png)

-   **Workbook File Name** -- Filename to be imported

-   **Worksheet Name** -- Work Sheet in file

Journal Posting
---------------

Navigate to the required Journal template/batch or navigate to the Sales
Invoice or Purchase Invoice list page

Journal can be posted as per standard journal posting routines.
Documents can be reviewed or posted
