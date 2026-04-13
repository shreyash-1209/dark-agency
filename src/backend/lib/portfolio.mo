import PortfolioTypes "../types/portfolio";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public type PortfolioProject = PortfolioTypes.PortfolioProject;

  public func seed(projects : List.List<PortfolioProject>) {
    Runtime.trap("not implemented");
  };

  public func list(projects : List.List<PortfolioProject>) : [PortfolioProject] {
    Runtime.trap("not implemented");
  };

  public func getById(projects : List.List<PortfolioProject>, id : Text) : ?PortfolioProject {
    Runtime.trap("not implemented");
  };
};
