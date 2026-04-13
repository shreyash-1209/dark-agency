import ContactTypes "../types/contact";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public type ContactSubmission = ContactTypes.ContactSubmission;

  public func submit(
    submissions : List.List<ContactSubmission>,
    name : Text,
    email : Text,
    phone : Text,
    message : Text,
    serviceType : Text,
  ) : ContactSubmission {
    Runtime.trap("not implemented");
  };

  public func list(submissions : List.List<ContactSubmission>) : [ContactSubmission] {
    Runtime.trap("not implemented");
  };
};
