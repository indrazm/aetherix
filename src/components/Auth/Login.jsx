'use client';

import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

export const Login = () => {
  return (
    <Card>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Email"
            />
          </div>
          <TextInput
            id="email1"
            placeholder="Email Address"
            required
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Password"
            />
          </div>
          <TextInput
            id="password1"
            placeholder="Password"
            required
            type="password"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            Remember me
          </Label>
        </div>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </Card>
  )
}