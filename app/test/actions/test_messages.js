import {expect} from 'chai';
import * as messageActions from '../../src/actions/messages';

describe('Actions: Messages', () => {
  it ('creates REQUEST_START', () => {
    const action = messageActions.requestStart();

    expect(action).to.deep.equal({
      type: 'REQUEST_START',
      keepMessages: true
    })
  });

  it ('creates REQUEST_DONE', () => {
    const action = messageActions.requestDone();

    expect(action).to.deep.equal({
      type: 'REQUEST_DONE',
      keepMessages: true
    })
  });

  it ('creates DISMISS_MESSAGES', () => {
    const action = messageActions.dismissMessages();

    expect(action).to.deep.equal({
      type: 'DISMISS_MESSAGES',
      keepMessages: true
    })
  });
});