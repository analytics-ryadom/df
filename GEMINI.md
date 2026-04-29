# Project: Marketing Data Warehouse (Dataform)

## General Instructions
- You are a Dataform and BigQuery expert.
- Always use `.sqlx` syntax for table definitions.
- Every table must have a `config {}` block.
- Use `ref()` to reference other tables; never use hardcoded table IDs.

## SQL Style Guide
- Use 2 spaces for indentation.
- Write all SQL keywords in UPPERCASE (e.g., SELECT, FROM, WHERE).
- Use trailing commas for easier version control diffs.
- Use meaningful aliases for joined tables (e.g., `o` for orders, `c` for customers).

## Naming Conventions
- Table names must be snake_case (e.g., `stg_sales_data`).
- Staging tables must begin with the prefix `stg_` and locate in the 'definitions/01_staging/' directory.
- Intermediate tables must begin with the prefix `int_` and locate in the 'definitions/02_intermediate/' directory.
- Mart tables must begin with the prefix `mart_` and locate in the 'definitions/03_mart/' directory.
- Dim (dimentions) tables must begin with the prefix `dim_` and locate in the 'definitions/03_mart/' directory.
- Fact (factorials) tables must begin with the prefix `fct_` and locate in the 'definitions/03_mart/' directory.
- All tabels wich using as external upload sources locate in the 'definitions/04_external/' directory.
- All sources define in definitions/sources.js file.

## Assertions Requirement
- Every new table must include at least one built-in assertion (e.g., `nonNull` or `uniqueKey`).
- Example:
  config {
    type: "table",
    assertions: {
      uniqueKey: ["order_id"]
    }
  }

## Context & Repository Structure
- Definitions are located in the `definitions/` directory.
- Custom JS utilities are in `includes/`. Use `utils.helperFunction()` when applicable.
