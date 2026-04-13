import ContactTypes "types/contact";
import PortfolioTypes "types/portfolio";
import PortfolioLib "lib/portfolio";
import ContactMixin "mixins/contact-api";
import PortfolioMixin "mixins/portfolio-api";
import List "mo:core/List";

actor {
  let submissions = List.empty<ContactTypes.ContactSubmission>();
  let projects = List.empty<PortfolioTypes.PortfolioProject>();

  include ContactMixin(submissions);
  include PortfolioMixin(projects);
};
