+++
date = '2026-01-15T22:20:03Z'
draft = false
title = 'What in the SQL? An in depth discussion of SQL vs NOSQL Implementations'
category = ["SQL"]
+++

## Introduction

Databases are rarely glamorous. They do not have sleek animations and nobody has ever bragged about getting to nth normal form on their table at a dinner party. And yet, in modern systems, databases decide whether your platform scales or collapses.

This post is a guided ramble— err I mean an opinionated, comparison of SQL and NoSQL. We will cover what they are, how they think, where they shine, where they suck, and why the correct answer is almost never “just pick one and hope”.

## Why Ramble About Databases at All?

In today’s shiny world of microservices, cloud-native infrastructure, and distributed everything, it is not always the API layer that takes a system down. Sometimes all it takes is a single, poorly written query holding the entire request chain hostage while threads queue and timeouts fire.

Databases typically store the most business-critical data in a system, yet they are frequently the least tolerated when something goes wrong. Despite all the talk of stateless services, databases remain the most stateful, expensive, and failure-sensitive components in a system.

Performance, scalability and correctness are constrained not by application code, but by data storage decisions. Database choices are architectural choices—and architectural choices have a long memory.

## What Exactly Is a “SQL”?

SQL, or Structured Query Language, is a fourth-generation language. You describe what you want, not how to compute it, and the database engine decides the execution plan.

SQL databases store relational data in tables composed of rows and columns. Relationships are explicit, constraints are enforced, and schemas tend to be rigid by design. The result is a system that strongly favours correctness, predictability, and consistency.

## What is in the SQL?

Data obviously : )

## What Is a “NoSQL”?

NoSQL often expanded as “Not Only SQL” is not a single technology but a family of approaches unified mostly by what they reject: strict relational structure.

Instead of tables and joins, NoSQL systems store data using alternative models such as documents, key-value pairs, graphs, or wide columns. Relationships are typically implicit or embedded directly into the data.

The selling point here is flexibility, scalability, and performance at scale. The cost is that the database will trust you to make the right decisions and, as we know, it can be dangerous.

## Relational Thinking vs Aggregate Thinking

Relational databases encourage modelling data as independent entities, with relationships resolved dynamically at query time using joins and unions. Complexity lives in the query layer. This makes schemas clean, type safety strong, and validation reliable, but query performance depends entirely by how well those joins and unions are written.

NoSQL systems encourage modelling data as aggregates optimised for specific access patterns. Complexity moves into data design. Queries are simpler and often faster, but the schema itself can grow… difficult over time. In extreme cases, it becomes its own malicious entity.

## Joins and Indexes: Life in SQL land

Relational queries rarely rely on one table. Joins allow data from multiple tables to be merged based on conditions—inner joins, left joins, right joins, and full outer joins, each with their own semantics and performance implications.

Indexes act as fast lookup structures, dramatically improving query speed when designed correctly. They are powerful, but not free. Every index consumes space and slows writes. Index everything and you will slow everything down.

## Documents, Keys, Graphs, and Columns: NoSQL Land

Document stores package related data into JSON or XML-like structures, enabling rich nested models.

Key-value stores operate like ultra-fast dictionaries: simple and effective.

Graph databases treat data as nodes and edges, excelling at relationship-heavy queries.

Columnar databases store data by column rather than row, effectively pre-joining data at scale.

Each model is highly specialised. Each is extremely good at what it does. Each becomes extremely painful when used in the wrong scenario.

## The Shape of Data

SQL systems assume data will be reshaped at query time. NoSQL systems assume data is shaped at write time.

Get the shape wrong in NoSQL, and you will eventually face complex, slow, and expensive queries or worse, irreversible data model issues. If the code does not confuse you, the production query runtime eventually will.

Schema flexibility does not mean schema absence. It means you are now the schema.

## ACID vs BASE: Philosophical Differences

SQL databases typically follow ACID guarantees:

Atomicity - Transactions are the unit of measurement

Consistency – Valid states remain valid

Isolation – Transactions do not interfere with one another

Durability – Data survives failures

NoSQL systems often lean toward BASE:

Basically Available – The system responds as close to always as possible

Soft State – Temporary inconsistency is tolerated

Eventual Consistency – Data will converge sync eventually

Neither is objectively better. They optimise for different situations.

## CAP Theorem

In distributed systems, you can only fully guarantee two of the following three:

Consistency

Availability

Partition tolerance

Modern systems are distributed by default, which means partition tolerance is non-negotiable. The real decision is where you sit on the consistency–availability spectrum—and that decision should be driven by business requirements, this same point for distributed systems works its way down into databases as well.

## How Much Does Consistency Actually Matter?

It depends.

Financial systems require near-immediate consistency. Social media feeds can tolerate delay. Passwords must be consistent.

Even within a single application, different data demands different guarantees. Treating all data equally is not always the right path.

## Querying Data: Readability vs Efficiency

Highly efficient queries are often less readable. This is true in both SQL and NoSQL. Chasing the last few milliseconds at the cost of maintainability is rarely worth it unless the performance gain is genuinely necessary.

Interestingly, many NoSQL implementations feel more natural to developers because queries resemble object traversal.

Both can be elegant or nightmarish depending on how optimised you want to get.

## Common SQL Implementations

MySQL – Simple, approachable, and reliable. A gateway database for many developers.

PostgreSQL – Powerful, open source, and beloved by people who enjoy correctness.

SQL Server – Microsoft’s enterprise-grade offering. You know what you are getting.

Oracle Database – Highly proprietary, highly marketed, and very confident about its AI.

## Common NoSQL Implementations

GraphQL – Excellent for graph-style data access, but schema complexity escalates quickly.

Redis – A key-value store hiding in plain sight.

MongoDB – Document-oriented and flexible, easy to write to, harder to query well.

Apache Cassandra – Columnar, fast, and rare. Brilliant for specific aggregate workloads.

## When SQL Makes Sense

SQL excels when you need:

Strong consistency

Complex, ad-hoc queries

Clear data relationships

Logical, clean schemas

If clarity and correctness are paramount, SQL is often the calmer choice.

## When NoSQL Makes Sense

NoSQL shines when:

You ingest massive volumes of data

You operate across regions

Access patterns are well defined

Availability matters more than immediacy

## When you may use both

Most modern systems require varying guarantees for different data. Transactions demand precision. Profile pictures do not.

Using both SQL and NoSQL is common. Managing duplication, cost, and operational complexity is the real challenge and it is not a trivial one.
