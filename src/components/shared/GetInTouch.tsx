"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import Wrapper from "./Wrapper";
import { Button } from "../ui/button";

export function GetInTouch() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <Wrapper>
            <div className="mb-20 mt-20">
                <div className='mx-10'>
                    <h2 className='text-5xl w-auto tracking-wider font-bold mb-4 font-sans leading-tight'>
                        Get In Touch
                    </h2>
                    <span className="mx-1 block h-1 w-16 bg-gradient-to-r from-[#dd1818] to-[#333333]"></span>
                </div>

                <div className="max-w-3xl mt-16 w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-4 shadow-input bg-[#1C1816]">
                    <form className="my-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Label htmlFor="firstname" className="text-xl text-neutral-200">First name</Label>
                                <Input id="firstname" placeholder="John" type="text" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname" className="text-xl text-neutral-200">Last name</Label>
                                <Input id="lastname" placeholder="Doe" type="text" />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4 text-neutral-200">
                            <Label htmlFor="email" className="text-xl text-neutral-200">Email Address</Label>
                            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                        </LabelInputContainer>

                        <LabelInputContainer className="mb-8">
                            <Label htmlFor="twitterpassword" className="text-xl text-neutral-200">Feedback</Label>
                            <Input
                                id="Feedback"
                            />
                        </LabelInputContainer>

                        <Button variant={"default"} className='bg-[#EA002A]  hover:bg-[#ffffff] hover:text-[#EA002A] hover:translate-y-[2px] mx-4 hover:ring-2 ring-[#EA002A] font-sans text-2xl font-semibold'>
                            Submit
                        </Button>

                        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-4 h-[1px] w-full" />


                    </form>
                </div>
            </div>
        </Wrapper>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
