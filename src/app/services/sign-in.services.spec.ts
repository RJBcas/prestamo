import { TestBed } from "@angular/core/testing";

import { SignInService } from "./sign-in.services";

describe("SignUpService", () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
