import ContactLib "../lib/contact";
import ContactTypes "../types/contact";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (submissions : List.List<ContactTypes.ContactSubmission>) {
  public func submitContact(
    name : Text,
    email : Text,
    phone : Text,
    message : Text,
    serviceType : Text,
  ) : async ContactTypes.ContactSubmission {
    Runtime.trap("not implemented");
  };

  public query func getContactSubmissions() : async [ContactTypes.ContactSubmission] {
    Runtime.trap("not implemented");
  };
};
