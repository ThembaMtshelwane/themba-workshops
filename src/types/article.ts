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
  excerpt: "Exploring cloud computing and it relates to clients",
  date: "January 19, 2026",
  readTime: "3 min read",
};

export const POST_CONTENT = `
Imagine you have a client that requires extensive IT services and resources. You might suggest they
buy the resources (physical servers) and hiring an IT team to manage them—the On-Premise Approach. But what if there's
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

| Feature | On-Premise | Cloud Computing |
|:--------|:-----------|:----------------|
| **Initial Cost** | High (hardware, setup) | Low (pay-as-you-go) |
| **Scalability** | Weeks to months | Minutes to hours |
| **Maintenance** | Internal team required | Provider handles it |
| **Accessibility** | Limited to location | Accessible anywhere |
| **Reliability** | Single point of failure | Built-in redundancy |

---

## Key Takeaways

Cloud Computing transforms how businesses approach IT infrastructure by eliminating upfront costs,
enabling rapid scaling, and removing maintenance burdens. While On-Premise solutions offer complete
control, Cloud Computing provides flexibility, accessibility, and cost-efficiency that modern
businesses increasingly require.
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
    readTime: "3 min read",
    category: "Software Dev",
    author: "Your Name",
    tags: ["Cloud", "AWS", "Infrastructure"],
    content: POST_CONTENT,
  },
};
