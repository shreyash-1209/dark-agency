import PortfolioLib "../lib/portfolio";
import PortfolioTypes "../types/portfolio";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (projects : List.List<PortfolioTypes.PortfolioProject>) {
  public query func getPortfolioProjects() : async [PortfolioTypes.PortfolioProject] {
    Runtime.trap("not implemented");
  };

  public query func getProjectById(id : Text) : async ?PortfolioTypes.PortfolioProject {
    Runtime.trap("not implemented");
  };
};
