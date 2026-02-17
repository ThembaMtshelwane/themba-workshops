export interface IArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const article = {
  id: "1",
  slug: "what-is-cloud-computing",
  title: "What is Cloud Computing?",
  excerpt: "Exploring cloud computing and how it relates to clients.",
  date: "January 19, 2026",
  readTime: "5 min read",
};

export const article2 = {
  id: "2",
  slug: "what-is-a-cloud-service-provider",
  title: "What is a Cloud Service Provider?",
  excerpt:
    'Exploring the ecosystem of Cloud Service Providers (CSPs) and how they deliver virtualized "building blocks".',
  date: "January 26, 2026",
  readTime: "4 min read",
};

export const article3 = {
  id: "3",
  slug: "understanding-the-foundation-of-aws-infrastructure-and-responsibility",
  title:
    "Understanding the Foundation of AWS: Infrastructure and Responsibility",
  excerpt:
    "This covers how AWS became a global cloud leader, the hierarchical structure of its Global Infrastructure, and the Shared Responsibility Model",
  date: "February 3, 2026",
  readTime: "6 min read",
};

export const article4 = {
  id: "4",
  slug: "introduction-to-amazon-ec2",
  title: "Introduction to Amazon EC2",
  excerpt:
    "An overview of Amazon Elastic Compute Cloud (EC2), a core AWS service for running virtual machines in the cloud.",
  date: "February 9, 2026",
  readTime: "8 min read",
};

export const article5 = {
  id: "5",
  slug: "amazon-ec2-scalability-and-elasticity",
  title: "Amazon EC2 Scalability and Elasticity",
  excerpt: "Learn how to scale your Amazon EC2 instances to meet changing demand.",
  date: "February 16, 2026",
  readTime: "8 min read",
};

export const POST_CONTENT = `
Imagine you have a client that requires extensive IT services and resources. You might suggest they
buy the resources (physical servers) and hire an IT team to manage them—the On-Premise Approach. But what if there's
another way? A way to effectively outsource the IT services, resources, and maintenance. This is where
cloud services come in.

---

## 1. Cloud Computing

Cloud Computing is the practice of using remote servers hosted on the internet to store, manage,
and process data. Essentially, it provides an IT infrastructure as a service and other essential services
on demand. A third party is responsible for the maintenance, security, and other overhead associated
with owning the physical resources. Cloud Computing is often considered a direct alternative
to an On-Premise Approach.

---

## 2. The Problems Cloud Computing Solves

As mentioned before, if you have a client that needs IT services, you have to consider the resources
you might need and how to manage them. There are a few approaches, but here we focus on On-Premise and
how Cloud Computing directly solves problems associated with it.

The following are the major "pain points" that could arise when dealing with creating an
IT infrastructure for a business:

- **Capacity**:
You have to guess how many resources (hardware—servers and IT team) you need up front.
If you buy too many, you've wasted money; if you buy too few, your website crashes when it gets too
popular. With cloud computing you pay for what you need and use.

- **Scalability**:
If there is more demand and the system needs to scale appropriately, you need to buy more hardware,
and that could take weeks or months (ordering, shipping, installing, wiring). With cloud computing it takes
minutes or hours to add resources.

- **Maintenance**:
Fixing broken fans, updating security patches, and managing power bills in-house takes up time and
money within the company. The provider handles the maintaince and security.

- **Accessibility**:
You can only access your work from the premises or physical location of the hardware. With cloud computing
the services are readily availble anywhere and promotes working in remote teams as long as there is a strong
internent connection.

- **Reliability**:
There is only one source of the data/resources, and resource duplication might need more time and
hardware. Cloud providers mirror your data across multiple global locations, so if one data center
goes down, your data remains safe.

---

## 3. On-Premise vs. Cloud Computing
![](/article-1.webp)

---

## 4. Types of Cloud Computing

- **Software as a Service (SaaS)**
A product that is ran and managed by the service provider.
You don't need to worry about how the service is maintained or
how the underlying infrastructure is managed; you only need to know
how to use the software. This is typically used by customers,
think of Gmail as the product, you just send emails and Google - the service provider - handles the servers.

- **Platform as a Service (PaaS)**
This service focuses on the deployment and the management of your apps and removes the
responsibility of managing the underlying infrastructure (hardware and operating systems).
This is used by developers, think of Vercel as the platfom, you can push your code and it handles the deployment.

- **Infrastructure as a Service (IaaS)**
This provides the basic building blocks of cloud IT and typically provides access to networking features,
computers (virtual or on dedicated hardware), and data storage space. It gives you the highest level of
flexibility and management control over your IT resources. Example: Amazon EC2, virtual servers where you
choose the OS (Windows/Linux) and install whatever you want.

---

## Key Takeaways

Cloud Computing transforms how businesses approach IT infrastructure by eliminating upfront costs,
enabling rapid scaling, and removing maintenance burdens. While On-Premise solutions offer complete
control, Cloud Computing provides flexibility, accessibility, and cost-efficiency that modern
businesses increasingly require.
`;

export const POST_CONTENT_2 = `
Now that we understand what Cloud Computing is and the value it brings, we need to look at the
entities that provide these services and the core building blocks they offer.

## 1. Cloud Service Provider (CSP)
A Cloud Service Provider (CSP) is an entity that owns massive data centers filled with physical
hardware and "rent" slices of that hardware to clients as services. These services can be then
linked together to create Cloud Architecture. CSPs provide access to their services via a single
unified API. These services utilize metered billing based on usage.

### The "Big Three" Providers:
  - Amazon Web Services (AWS): The market leader with the most extensive list of services.
  - Microsoft Azure: Popular with enterprises that already use Windows and Office 365.
  - Google Cloud Platform (GCP): Known for high-end data analytics and machine learning capabilities.

## 2. Common Cloud Services 
There are four common types of cloud services for Infrastructure as a Service (IaaS). These represent
the "virtual" versions of physical hardware you would find in a traditional server room.

![](/article-2.webp)

### 1. Compute (The Brain)
A virtual computer that can run applications, programs and code. It provides the CPU and RAM needed to process logic.
In the cloud, this is often called a Virtual Machine (VM). You can choose your Operating System (Linux or Windows) and
instantly upgrade the power if your application gets busy.

### 2. Networking (The Nervous System)

A virtual network that dictates how data moves between internal servers and the internet.
You can create Virtual Private Clouds (VPC) to hide sensitive data from the public internet or use Load Balancers
to distribute incoming traffic so one server doesn't get overwhelmed.

### 3. Storage
This is where the files live, data that needs to persist even when the computer is turned off. Cloud storage is
very durable. Cloud providers typically store three copies of your files in different locations. 

### 4. Database
While you could install a database on a Compute instance, "Managed Databases" are specialized services designed
specifically for data integrity and speed. Relational (SQL): Great for structured data (like bank transactions).
Non-Relational (NoSQL): Great for unstructured data (like social media posts or real-time comments).

`;

export const POST_CONTENT_3 = `
Amazon Web Services (AWS) has evolved from an internal solution for Amazon’s own retail
scaling challenges into the world’s most comprehensive and broadly adopted cloud platform.
This article explores the history of AWS, the physical infrastructure that powers it, and
the security framework that keeps it safe.

---

## 1. The Evolution of AWS
In the early 2000s, Amazon realized they had become experts at building scalable,
cost-effective data centers to handle the massive traffic of their retail site. In 2006,
they decided to offer this "backbone" to other companies as a service. This birthed the modern
cloud computing industry, allowing businesses to trade capital expenses (buying hardware) for
variable expenses (paying for what you use).

---

## 2. AWS Global Infrastructure
The AWS Global Infrastructure is designed to be the most flexible and secure cloud computing
environment available today. It is built on three hierarchical levels:

### 1. Data Centers
  At the most basic level, AWS infrastructure consists of physical Data Centers. These are the
  physical buildings that house the servers, storage, and networking equipment.

### 2. Availability Zones (AZs)
An Availability Zone is one or more discrete data centers with redundant power, networking, and connectivity.
It is a best practice to distribute your resources across multiple AZs. This provides High Availability (HA)
and Fault Tolerance (FT), ensuring that if one data center fails, your application remains online.

### 3. Regions
A Region is a physical location in the world where AWS clusters multiple Availability Zones. Each Region consists
of a minimum of 3 physically separated AZs. Regions are designed to provide low-latency, fault-tolerant access to
services for users within a specific geographic area.

![](/article-3.webp)

---

## 3. High Availability vs. Fault Tolerance
While often used interchangeably, your notes highlight a key distinction:\n
- ***High Availability:*** Focuses on ensuring a system is "up" as much as possible, often through redundancy.\n
- ***Fault Tolerance:*** A higher standard where the system can continue operating even if a major component fails, with zero downtime or data loss.

---

## 4. The AWS Shared Responsibility Model
Security and compliance are a "shared" effort between AWS and the customer. This model helps reduce the customer’s operational burden as AWS operates,
manages, and controls the components from the host operating system down to the physical security of the facilities.

***AWS Responsibility: "Security OF the Cloud"***

AWS is responsible for protecting the global infrastructure that runs all of the services offered. This includes:

- Hardware: Physical servers and storage.
- Software: The virtualization layer.
- Networking: The physical cables and routers.
- Facilities: The actual buildings and data centers.

***Customer Responsibility: "Security IN the Cloud"***\n
The customer is responsible for managing security requirements for their data. This includes:

- Data Management: Deciding what data is stored and who has access.
- Encryption: Implementing Client-Side encryption.
- Configuration: Managing OS updates, firewalls (Security Groups), and network configurations.


***The "Shared" Area***\n
Some responsibilities depend on the specific service used. For example, if you use a managed service like Amazon RDS (database),
AWS handles more of the "Shared" tasks like OS patching, whereas if you use EC2 (virtual servers), you are responsible for the OS yourself.

---

## Conclusion
AWS provides the **Global Infrastructure** to make your applications highly available and fault-tolerant, but the **Shared Responsibility Model** ensures you remain the architect of your own security. Success in the cloud is found at the intersection of robust infrastructure and proactive management.

`;

export const POST_CONTENT_4 = `
Amazon Elastic Compute Cloud (EC2) is a core service within the AWS ecosystem that provides the 
compute capability in the cloud. It allows users to run virtual machines (instances) on demand,
making it a fundamental building block for many applications and services hosted on AWS.

---

## 1. Core Concepts: Compute & Virtualization
Compute refers to the processing power required to run applications and perform tasks. In the context
of cloud computing, it typically involves virtual machines (VMs) that provide CPU and RAM resources.
EC2 instances can be easily scaled up or down based on demand, allowing for flexibility and
cost-efficiency.

---

## 2. What is Amazon EC2?
Amazon EC2 is an AWS service that provides secure, resizable compute capacity in the cloud.
It is designed to make web-scale cloud computing easier for developers. With EC2, you can launch as
many or as few virtual servers as you need, configure security and networking, and manage storage.
More flexible, cost-effective, and scalable than managing traditional on premise servers. Costs are
based on only active usage.

All of this allows for faster development and deployment of applications.

---

## 3. How Amazon EC2 Works
Amazon EC2 provides a web service interface that allows you to create and manage instances.
The lifecycle of an EC2 instance revolves around three main phases:

- **Launch an Instance**:\n
When lauching an EC2 instance, you must configure two primary components: An Amazon Machine Image (AMI) and
an Instance Type.\n
1. An Amazon Machine Image (AMI) serves as a template for your instance, this includes the operating
system and any additional software you want pre-installed.
2. Instance type defines the hardware resources (CPU, RAM, storage) allocated to your instance. You
can choose how powerful your virtual machine is based on your needs. You can choose from a variety of
instance types optimized for different use cases (e.g., compute-optimized, memory-optimized,
storage-optimized).\n

- **Connect to Your Instance**:\n
You can interact with your instances through various protocols depending on the OS and use case:
1. **SSH (Secure Shell)**: For Linux instances, you can use SSH to securely connect to the command
line of your instance.
2. **RDP (Remote Desktop Protocol)**: For Windows instances, you can use RDP to access the graphical
desktop environment.
3. **EC2 Instance Connect / Systems Manager**: Modern, browser-based secure shell access without needing to manage SSH keys.
4. **API Calls**: You can also interact with your EC2 instances programmatically using AWS SDKs or
the AWS CLI.

- **Use the EC2 Instance**:\n
Once connected, you can install software, run applications, and manage your instance just like you
would with a physical server. You can also use EC2 features like Elastic Block Store (EBS) for
persistent storage and Elastic Load Balancing (ELB) to distribute traffic across multiple instances.

---

## 4. Amazon EC2 Instance Types
Different EC2 Instance Types exist to help meet specific use cases and workloads. Each instance type
offers a different combination of CPU, memory, storage, and networking capacity. This allows you
to choose the right mix of resources for your applications.

These are grouped into families based on their intended use case:

- **General Purpose**: These instances provide a balanced mix of compute, memory, and networking
resources (e.g., t3, m5). Ideal for a wide variety of workloads, including web servers, development
environments, and small databases. Best for when workloads are uncertain.

- **Compute Optimized**: High CPU-to-memory ratio for compute-intensive applications (e.g., c5).
Ideal for compute-intesive tasks like batch processing, high-performance web servers, machine
learning and scientific modeling.

- **Memory Optimized**: High memory-to-CPU ratio for memory-intensive applications (e.g., r5).
Ideal for in-memory databases, real-time big data analytics, streaming applications, and
high-performance databases.

- **Accelerated Computing**: These instances use hardware accelerators (GPUs), or co-processors,
to perform functions such as floating point operations, graphics processing,
and machine learning inference.

- **Storage Optimized**: High disk throughput for storage-intensive applications (e.g., i3).
Ideal for workloads that require high, sequential read and write access to large data sets on local
storage, such as NoSQL databases, data warehousing, and Elasticsearch.

---

## 5. Amazon EC2 Pricing Models
- **On-Demand Instances**: Only pay for the duration of when your instances are running, with no
long-term commitments. Easy to use and ideal for short-term, spiky, or unpredictable workloads
that cannot be interrupted. Easy to start with to figure out ypur baseline workload needs but
can get expensive.

- **Savings Plans**: Flexible pricing model that offers lower prices in exchange for a commitment to
a consistent amount of usage (measured in $/hour) for a 1 or 3-year term. Provides savings of up to
 72% compared to On-Demand pricing.
 
- **Reserved Instances**: Make a one-time payment for a significant discount on hourly rates in
exchange for a commitment to use the instance for a 1 or 3-year term. Suitable for steady-state
 workloads with predictable usage patterns.

- **Spot Instances**: Bid for unused EC2 capacity at potentially lower prices, but with the risk of
interruption. Up to 90% savings compared to On-Demand pricing. Ideal for workloads that are flexible
and can tolerate interruptions, such as batch processing and data analysis.

- **Dedicated Hosts**: Physical servers dedicated for your use, allowing you to use your existing
server-bound software licenses. Ideal for sensitive workloads that require compliance and regulatory
requirements, or when you want to use existing software licenses that are not eligible for AWS's
other pricing models. You have control over the placement of instances  and resource allocation.

---


## Conclusion
Amazon EC2 provides a powerful and flexible compute service that can be tailored to meet the needs
of a wide variety of applications. Whether you need a small instance for a simple web application
or a large cluster for high-performance computing, EC2 offers the tools and options to help you
succeed in the cloud.
`;

export const POST_CONTENT_5 = `
As your application grows, you need to ensure that your infrastructure can adapt with demand.
For Amazon EC2, this adaptability is achieved through Scalability and Elasticity. These concepts
allow you to adjust your resources dynamically based on workload requirements.

While often used interchangeably, understanding the distinction between them is key to building
a cost-effective and reliable infrastructure.

---

## 1. Scalability vs. Elasticity: What’s the Difference?

- **Scalability**: The ability of a system to handle increased load by adding resources.
It can be achieved through vertical scaling (adding more power to an existing instance) or
horizontal scaling (adding more instances). Scalability is about the capacity of the system
to grow. This focuses on the sytem's long-term capacity planning to make sure that it can
grow and accommodate more users or data as needed. It is often associated with the ability
to handle growth over time.

- **Elasticity**: The ability of a system to automatically adjust resources in real-time
based on demand. This procides cost efective nad optimal resorce usage at any given moment.
Elasticity is about the system's ability to respond to changes in demand quickly and efficiently.
Scale out during periods of high demaand and scale in during periods of low demand.

Think of scalability as the ability to handle 1 million users and elasticity as the ability to
adjust resources to handle 100 users at 2 AM and 1 million users at noon without manual intervention.

---

## 2. Amazon EC2 Auto Scaling
Amazon EC2 Auto Scaling is a service that automatically adjusts the number of EC2 instances in
based on the changes in the application's demand. This helps implement elasticity. It helps maintain
the application's availability. It offers two main approaches to scaling:

- **Predictive Scaling**: Uses machine learning to predict future traffic patterns and scales resources
in advance. For example, if your application experiences regular traffic spikes every day at noon,
predictive scaling can learn this pattern and automatically add instances before the spike occurs.

- **Dynamic Scaling**: Automatically adjusts the number of instances in response to real-time
metrics (e.g. CPU utilization, network traffic). For example, if CPU usage exceeds 70% for 5 minutes,
Auto Scaling can launch additional instances to handle the load.


Auto Scaling Groups are used to manage collections of EC2 instances. You can define scaling policies
that specify when and how to scale your instances based on CloudWatch metrics or scheduled actions.
To configure an Auto Scaling Group, you need to specify the desired capacity, minimum and maximum number
of instances, and the scaling policies that determine when to add or remove instances.

- **Minimum Capacity**: The least number of instances that should be running at all times. This ensures
your application has a baseline level of resources available. Cannot scale down below this number, even
if demand is low. For example, let's set the minimum capacity to 4. This means that even during periods
of low demand, there will always be at least 2 instances running to handle any incoming traffic.

![minimum capacity](/article-5-1.webp)

- **Desired Capacity**: The ideal number of instances you want running, enough to handle the expected
average workload. Auto Scaling will try to maintain this number based on the scaling policies you set. If
this is not defined, Auto Scaling will use the minimum capacity as the default desired capacity. In the
example above, if we set the desired capacity to 6, Auto Scaling will try to maintain 6 instances running.

![desired capacity](/article-5-2.webp)

- **Maximum Capacity**: The maximum number of instances that can be running. This prevents overscaling
and helps control costs. Cannot scale up beyond this number, even if demand is high. Fianlly, if we set
the maximum capacity to 10, Auto Scaling will never launch more than 10 instances, even if the demand
spikes significantly.

![maximum capacity](/article-5-3.webp)

---

## Conclusion
Scalability and Elasticity are critical for ensuring that your application can handle varying levels of
demand while optimizing costs. Amazon EC2 Auto Scaling provides powerful tools to help you achieve both,
allowing your infrastructure to grow and adapt seamlessly as your application's needs evolve.





`;

export const allPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    category: string;
    author?: string;
    tags?: string[];
  }
> = {
  "what-is-cloud-computing": {
    title: "What is Cloud Computing?",
    excerpt: "Exploring cloud computing and how it relates to clients",
    date: "January 19, 2026",
    readTime: "5 min read",
    category: "Software Dev",
    tags: ["Cloud", "AWS", "Infrastructure"],
    content: POST_CONTENT,
  },
  "what-is-a-cloud-service-provider": {
    title: "What is a Cloud Service Provider?",
    excerpt: "Exploring cloud computing and how it relates to clients",
    date: "January 26, 2026",
    readTime: "4 min read",
    category: "Software Dev",
    tags: ["Cloud", "AWS", "Infrastructure"],
    content: POST_CONTENT_2,
  },
  "understanding-the-foundation-of-aws-infrastructure-and-responsibility": {
    title:
      " Understanding the Foundation of AWS: Infrastructure and Responsibility",
    excerpt:
      "The fundamental pillars of Amazon Web Services (AWS). This covers how AWS became a global cloud leader, the hierarchical structure of its Global Infrastructure, and the Shared Responsibility Model, which defines the security obligations between AWS  and the Customer",
    date: "February 3, 2026",
    readTime: "6 min read",
    category: "Software Dev",
    tags: ["Cloud", "AWS", "Infrastructure"],
    content: POST_CONTENT_3,
  },
  "introduction-to-amazon-ec2": {
    title: "Introduction to Amazon EC2",
    excerpt:
      "An overview of Amazon Elastic Compute Cloud (EC2), a core AWS service for running virtual machines in the cloud.",
    date: "February 9, 2026",
    readTime: "8 min read",
    category: "Software Dev",
    tags: ["Cloud", "AWS", "Infrastructure", "Compute", "EC2"],
    content: POST_CONTENT_4,
  },
  "amazon-ec2-scalability-and-elasticity": {
    title: "Amazon EC2 Scalability and Elasticity",
    excerpt:
      "Learn how to scale your Amazon EC2 instances to meet changing demand.",
    date: "February 16, 2026",
    readTime: "5 min read",
    category: "Software Dev",
    tags: ["Cloud", "AWS", "Infrastructure", "Compute", "EC2"],
    content: POST_CONTENT_5,
  },
};
  