"use client";

import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";
import {createSuperHero} from "../lib/actions";
import { SuperHero } from "../lib/types";

export default function SuperHeroForm() {
  const [heroName, setHeroName] = useState<string>();
  const [secretId, setSecretId] = useState<string>();
  const [age, setAge] = useState<number>();
  const [power, setPower] = useState<string>();
  const [error, setError] = useState<boolean>();
  const handleHeroNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setHeroName(event.target.value);
  }
  const handleSecretIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setSecretId(event.target.value);
  }
  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setAge(Number(event.target.value));
  }
  const handlePowerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setPower(event.target.value);
  }
  const handleAction = async () => {
    if (!heroName || !secretId || !age || !power) {
      return setError(true);
    }
    const superHero = {
      heroName,
      secretId,
      age,
      power,
    } as SuperHero;
    console.log("Creating super-hero", superHero);
    await createSuperHero(superHero);
    setError(false);
  }
  return (
    <form action={handleAction} className="flex flex-col gap-4 p-4 bg-slate-200 rounded text-slate-700">
      <HeroFormInput label="Hero Name" id="hero-name" value={heroName} onChange={handleHeroNameChange} />
      <HeroFormInput label="Secret ID" id="secret-id" value={secretId} onChange={handleSecretIdChange} />
      <HeroFormInput label="Age" id="age" type="number" value={age} minLength={0} onChange={handleAgeChange} />
      <HeroFormInput label="Power" id="power" value={power} onChange={handlePowerChange} />
      <button className="p-2 bg-slate-700 hover:bg-opacity-80 transition-colors text-white rounded">Submit</button>
      {error && <span className="text-xs text-red-500" hidd>* All fields are required</span>}
    </form>
  )
}

interface HeroFormInputProps {
  label: string;
  id: string;
  type?: HTMLInputTypeAttribute;
  value?: string | number;
  minLength?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function HeroFormInput({ label, id, value, type, minLength, onChange }: HeroFormInputProps) {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <label htmlFor={id} className="font-medium">{label}</label>
      <input id={id} title={id} type={type} value={value} minLength={minLength} onChange={onChange} className="max-w-sm rounded-sm px-2 py-px" />
    </div>
  )
}