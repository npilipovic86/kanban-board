import { suite, test, slow, timeout } from "mocha-typescript";
describe("one", () => {
    it("test", () => { });
});
@suite class Two {
    @test method() { }
}