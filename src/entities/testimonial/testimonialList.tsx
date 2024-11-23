import { List } from "@/shared/ui/list";
import { Testimonial } from "./ui/testimonial";

const mockListTestimonials = [
  {
    author: "Genry Ambronson",
    rating: 3,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit enim reprehenderit consectetur praesentium. Rerum sequi consequuntur hic sit, pariatur soluta ipsa minima labore voluptates temporibus obcaecati culpa exercitationem non?",
  },
  {
    author: "Genry Ambronson",
    rating: 3,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit enim reprehenderit consectetur praesentium. Rerum sequi consequuntur hic sit, pariatur soluta ipsa minima labore voluptates temporibus obcaecati culpa exercitationem non?",
  },
  {
    author: "Genry Ambronson",
    rating: 3,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit enim reprehenderit consectetur praesentium. Rerum sequi consequuntur hic sit, pariatur soluta ipsa minima labore voluptates temporibus obcaecati culpa exercitationem non?",
  },
];

export const TestimonialList = () => {
  return <List list={mockListTestimonials} ItemList={Testimonial} />;
};
