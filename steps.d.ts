/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type createAccountPage = typeof import('./pages/create_account.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, createAccountPage: createAccountPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
