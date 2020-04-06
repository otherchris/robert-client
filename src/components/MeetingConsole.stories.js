import React from 'react';
import MeetingConsole from './MeetingConsole';

export default {
  component: MeetingConsole,
  title: 'MeetingConsole',
};

const dataNotLoaded = {
  meetingId: '',
  state: 'NOT_LOADED'
};

const dataLoading = {
  meetingId: '',
  state: 'LOADING'
};

const dataLoaded = {
  meetingId: 'MEETIN',
  state: 'LOADED'
};

const dataError = {
  meetingId: '',
  state: 'ERROR'
};

export const not_loaded = () => (<MeetingConsole data={dataNotLoaded} />)
export const loading = () => (<MeetingConsole data={dataLoading} />)
export const loaded = () => (<MeetingConsole data={dataLoaded} />)
export const error = () => (<MeetingConsole data={dataError} />)