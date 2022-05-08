import { Component, createSignal } from 'solid-js';
import { Timeline } from '@components/Timeline';
import { Calendar } from '@components/Calendar';
import dayjs from 'dayjs';

export const Top: Component = () => {
  const [date, setDate] = createSignal(dayjs().format('YYYY-MM-DD'));

  const submit = () => {};

  return (
    <div class="flex flex-col text-md h-full p-4">
      <Timeline />
    </div>
  );
};
