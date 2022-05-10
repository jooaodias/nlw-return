import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const submitFeedback = new SubmitFeedbackUseCase(
  { create: jest.fn() },
  { sendMail: jest.fn() }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", () => {
    expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64, 12738192082",
      })
    ).resolves.not.toThrow();
  });

  it("should not be able to submit a feedback without type", () => {
    expect(
      submitFeedback.execute({
        type: "",
        comment: "example comment",
        screenshot: "data:image/png;base64, 12738192082",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without comment", () => {
    expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64, 12738192082",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback with an invalid screenshot", () => {
    expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "131",
      })
    ).rejects.toThrow();
  });
});
