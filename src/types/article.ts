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
  readTime: "2 min read",
};

export const article2 = {
  id: "2",
  slug: "what-is-a-cloud-service-provider",
  title: "What is a Cloud Service Provider?",
  excerpt:
    'Exploring the ecosystem of Cloud Service Providers (CSPs) and how they deliver virtualized "building blocks".',
  date: "January 26, 2026",
  readTime: "1 min read",
};

export const article3 = {
  id: "3",
  slug: "understanding-the-foundation-of-aws-infrastructure-and-responsibility",
  title:
    "Understanding the Foundation of AWS: Infrastructure and Responsibility",
  excerpt:
    'Exploring the ecosystem of Cloud Service Providers (CSPs) and how they deliver virtualized "building blocks".',
  date: "February 3, 2026",
  readTime: "1 min read",
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

### 1. Capacity

You have to guess how many resources (hardware—servers and IT team) you need up front.
If you buy too many, you've wasted money; if you buy too few, your website crashes when it gets too
popular. With cloud computing you pay for what you need and use.

### 2. Scalability

If there is more demand and the system needs to scale appropriately, you need to buy more hardware,
and that could take weeks or months (ordering, shipping, installing, wiring). With cloud computing it takes
minutes or hours to add resources.

### 3. Maintenance

Fixing broken fans, updating security patches, and managing power bills in-house takes up time and
money within the company. The provider handles the maintaince and security.

### 4. Accessibility

You can only access your work from the premises or physical location of the hardware. With cloud computing
the services are readily availble anywhere and promotes working in remote teams as long as there is a strong
internent connection.

### 5. Reliability

There is only one source of the data/resources, and resource duplication might need more time and
hardware. Cloud providers mirror your data across multiple global locations, so if one data center
goes down, your data remains safe.

---

## 3. On-Premise vs. Cloud Computing
![](/article-1.webp)

---

## 4. Types of Cloud Computing

### 1. Software as a Service (SaaS)
A product that is ran and managed by the service provider.
You don't need to worry about how the service is maintained or
how the underlying infrastructure is managed; you only need to know
how to use the software. This is typically used by customers,
think of Gmail as the product, you just send emails and Google - the service provider - handles the servers.

### 2. Platform as a Service (PaaS)
This service focuses on the deployment and the management of your apps and removes the
responsibility of managing the underlying infrastructure (hardware and operating systems).
This is used by developers. Think of Vercel as the platfom, you can push your code and it handles the deployment.
AWS Elastic Beanstalk, a platform to deploy web apps without configuring the underlying EC2 instances.

### 3. Infrastructure as a Service (IaaS)
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
Now that we understand what Cloud Computing is and the value it brings, we need to look at the entities
that provide these services and the core building blocks they offer.

## 1. Cloud Service Provider (CSP)
A company that owns massive data centers filled with physical hardware and "rent" slices of that hardware to clients.
Basically provides multiple cloud services. These services can be then linked together to create
Cloud Architecture. Cloud Providers provide access to their services via a single unified API. These
services utilize metered billing based on usage.

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
This is where the files live, data that needs tp persist even when the computer is turned off. Cloud storage is
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

## 1. The Evolution of AWS
In the early 2000s, Amazon realized they had become experts at building scalable,
cost-effective data centers to handle the massive traffic of their retail site. In 2006,
they decided to offer this "backbone" to other companies as a service. This birthed the modern
cloud computing industry, allowing businesses to trade capital expenses (buying hardware) for
variable expenses (paying for what you use).

## 2. AWS Global Infrastructure
The AWS Global Infrastructure is designed to be the most flexible and secure cloud computing
environment available today. It is built on three hierarchical levels:

### Data Centers
  At the most basic level, AWS infrastructure consists of physical Data Centers. These are the
  physical buildings that house the servers, storage, and networking equipment.

### Availability Zones (AZs)
An Availability Zone is one or more discrete data centers with redundant power, networking, and connectivity.
It is a best practice to distribute your resources across multiple AZs. This provides High Availability (HA)
and Fault Tolerance (FT), ensuring that if one data center fails, your application remains online.


### Regions
A Region is a physical location in the world where AWS clusters multiple Availability Zones. Each Region consists
of a minimum of 3 physically separated AZs. Regions are designed to provide low-latency, fault-tolerant access to
services for users within a specific geographic area.

## 3. High Availability vs. Fault Tolerance
While often used interchangeably, your notes highlight a key distinction:\n
***High Availability:*** Focuses on ensuring a system is "up" as much as possible, often through redundancy.\n
***Fault Tolerance:*** A higher standard where the system can continue operating even if a major component fails, with zero downtime or data loss.

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
- Encryption: Implementing Client-Side or Server-Side encryption.
- Configuration: Managing OS updates, firewalls (Security Groups), and network configurations.


***The "Shared" Area***\n
Some responsibilities depend on the specific service used. For example, if you use a managed service like Amazon RDS (database),
AWS handles more of the "Shared" tasks like OS patching, whereas if you use EC2 (virtual servers), you are responsible for the OS yourself.
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
    readTime: "2 min read",
    category: "Software Dev",
    tags: ["Cloud", "AWS", "Infrastructure"],
    content: POST_CONTENT,
  },
  "what-is-a-cloud-service-provider": {
    title: "What is a Cloud Service Provider?",
    excerpt: "Exploring cloud computing and how it relates to clients",
    date: "January 26, 2026",
    readTime: "1 min read",
    category: "Software Dev",
    tags: ["Cloud", "AWS", "Infrastructure"],
    content: POST_CONTENT_2,
  },
  "understanding-the-foundation-of-aws-infrastructure-and-responsibility": {
    title:
      " Understanding the Foundation of AWS: Infrastructure and Responsibility",
    excerpt: "Exploring cloud computing and how it relates to clients",
    date: "February 3, 2026",
    readTime: "1 min read",
    category: "Software Dev",
    tags: ["Cloud", "AWS", "Infrastructure"],
    content: POST_CONTENT_3,
  },
};
