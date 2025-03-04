"use client"

import { useState } from "react"
import { TimerIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"
import {
  TimePicker,
  TimePickerContainer,
} from "@/registry/default/ui/time-picker"

export default function TimePickerWithPopover() {
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)
  return (
    <div
      className={
        "w-full h-full flex flex-row items-center justify-center gap-2"
      }
    >
      <span>The time you want to rent the car:</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button>
            <TimerIcon />
            {days}d,{hours}h
          </Button>
        </PopoverTrigger>
        <PopoverContent className={"w-96 h-48 flex flex-col items-center"}>
          <h1 className={"text-2xl font-semibold"}>Time Picker</h1>
          <TimePickerContainer>
            <TimePicker
              timeMilliseconds={1000 * 60 * 60}
              maxValue={24}
              prefixLabel={
                <span className={"text-sm text-center w-20"}>Hour:</span>
              }
              suffixLabel={
                <span className={"text-sm text-center w-20"}>h</span>
              }
              value={hours}
              onValueChange={setHours}
            />
            <TimePicker
              timeMilliseconds={1000 * 60 * 60 * 24}
              maxValue={100}
              prefixLabel={
                <span className={"text-sm text-center w-20"}>Day:</span>
              }
              suffixLabel={
                <span className={"text-sm text-center w-20"}>d</span>
              }
              value={days}
              onValueChange={setDays}
            />
          </TimePickerContainer>
        </PopoverContent>
      </Popover>
    </div>
  )
}
