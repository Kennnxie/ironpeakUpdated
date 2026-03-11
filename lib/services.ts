export type Service = {
  slug: string
  title: string
  description: string
  image: string
}

export const services: Service[] = [
  {
    slug: 'residential-construction',
    title: 'Residential Construction',
    description: 'New home builds designed around your vision, delivered on time, on budget, and built to last.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
  },
  {
    slug: 'remodeling-renovation',
    title: 'Home Remodeling & Renovation',
    description: 'Kitchens, bathrooms, additions, and full-home renovations completed with care and precision.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    slug: 'commercial-build-outs',
    title: 'Commercial Build-Outs',
    description: 'Retail, office, and mixed-use spaces built to code and delivered ready to operate.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    slug: 'design-build',
    title: 'Design-Build Services',
    description: 'One team from concept to completion. We handle design and construction so nothing falls through the cracks.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    slug: 'structural-concrete',
    title: 'Structural & Concrete Work',
    description: 'Foundations, slabs, framing, and structural repairs, the work everything else depends on.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
  },
  {
    slug: 'project-management',
    title: 'Project Management & Consulting',
    description: 'We step in to manage timelines, vendors, and budgets so your project stays on track.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
]
