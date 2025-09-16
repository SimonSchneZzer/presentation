import React from 'react';
import { PresentationSlide } from './presentation-slide';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import helinPhoto from 'figma:asset/546bf7aa0456484eaea52848befc0a0c2c387bd8.png';
import simonPhoto from '../assets/5AC3E9ED-3C67-4060-9735-C9CEDBE040B5.JPG';
import leaPhoto from 'figma:asset/3d72f3947c871f4ec179d4ad3e31e24d6e58999d.png';
import ipekPhoto from '../assets/48986.jpeg';
import rosemariePhoto from '../assets/48821.jpeg';
import {  
  ArrowRight, 
  DollarSign, 
  HelpCircle, 
  Users, 
  Vote, 
  Settings, 
  Star,
  CheckCircle,
  Mail,
  Sparkles,
  User
} from 'lucide-react';

export function IntroSlide() {
  const teamMembers = [
    {
      name: "Rosemarie Haider",
      email: "rhaider.rvee-m2025@fh-salzburg.ac.at",
      photo: rosemariePhoto
    },
    {
      name: "Ipek Yilmaz",
      email: "iyilmaz.mma-b2022@fh-salzburg.ac.at", 
      photo: ipekPhoto
    },
    {
      name: "Helin Güyen",
      email: "hgueyen.mmt-b2022@fh-salzburg.ac.at",
      photo: helinPhoto
    },
    {
      name: "Simon Schnetzer",
      email: "sschnetzer.mmt-b2023@fh-salzburg.ac.at",
      photo: simonPhoto
    },
    {
      name: "Lea Etzlinger",
      email: "letzlinger.mmtb-m2025@fh-salzburg.ac.at",
      photo: leaPhoto
    }
  ];

  return (
    <PresentationSlide className="bg-gradient-to-br from-slate-500 to-slate-600 text-white">
      <div className="text-center w-full flex flex-col items-center relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-8 h-8 text-yellow-300" />
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">We are the StV for CT</h1>
          <Sparkles className="w-8 h-8 text-yellow-300" />
        </div>
        
        <h2 className="text-2xl opacity-95 mb-10 bg-white/20 px-8 py-3 rounded-full backdrop-blur-md border border-white/30 font-semibold drop-shadow-md">
          Student Representatives Creative Technologies
        </h2>
        
        {/* Main Contact Email - Prominent in center */}
        <div className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-md p-8 rounded-2xl border-2 border-white/40 shadow-2xl mb-8">
          <div className="flex items-center justify-center gap-4 text-2xl">
            <Mail className="w-8 h-8 text-blue-300" />
            <span className="font-bold drop-shadow-lg text-white">stv.ct@fh-salzburg.ac.at</span>
          </div>
          <p className="text-sm opacity-90 mt-2 font-medium">Main Contact Email</p>
        </div>
        
        {/* Team Members - Smaller with photos */}
        <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-xl">
          <h3 className="text-lg mb-4 font-semibold drop-shadow-md">Our Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {teamMembers.map((member, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <button className="flex flex-col items-center gap-2 bg-white/10 px-3 py-3 rounded-lg border border-white/20 shadow-md hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white/50">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20 border-2 border-white/30">
                      {member.photo ? (
                        <img 
                          src={member.photo} 
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white/70" />
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-sm drop-shadow-sm">{member.name}</div>
                      <div className="text-xs opacity-80 break-all">{member.email}</div>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-white/15 backdrop-blur-md text-white border border-white/30 sm:max-w-lg p-8 rounded-2xl shadow-2xl">
                  <DialogHeader className="items-center text-center">
                    <DialogTitle className="text-3xl font-bold drop-shadow-lg">{member.name}</DialogTitle>
                    <DialogDescription className="text-white/80 text-base">Contact information</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-6 mt-4 sm:grid-cols-2 items-center">
                    <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-white/20 border-2 border-white/30 shadow-xl">
                      {member.photo ? (
                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-center block" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <User className="w-12 h-12 text-white/70" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="font-medium text-white/90">Email</div>
                      <a href={`mailto:${member.email}`} className="text-blue-200 hover:underline break-all text-xl">{member.email}</a>
                    </div>
                  </div>
                  <div className="flex justify-center sm:justify-end mt-6">
                    <a href={`mailto:${member.email}`}>
                      <Button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 border border-white/30 text-white px-4 py-2 text-sm">
                        <Mail className="w-4 h-4" />
                        Write email
                      </Button>
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
}

export function Slide1() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-slate-700 to-slate-800 text-white">
      <div className="text-center w-full relative">
        {/* Decorative background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-white/15 rounded-full"></div>
        <div className="absolute bottom-16 left-20 w-12 h-12 bg-white/20 rounded-full"></div>
        
        <div className="flex justify-center mb-8">
          <div className="bg-white/20 p-6 rounded-full">
            <ArrowRight className="w-16 h-16 text-white" />
          </div>
        </div>
        
        <h1 className="text-6xl mb-8 leading-tight font-bold text-white drop-shadow-2xl">
          What we do for you
        </h1>
        
        <div className="bg-white/20 backdrop-blur-md px-10 py-6 rounded-2xl inline-block border border-white/30 shadow-2xl">
          <h2 className="text-3xl font-semibold drop-shadow-lg">The tasks of the Student Representatives</h2>
        </div>
      </div>
    </PresentationSlide>
  );
}

export function Slide2() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-slate-800 to-gray-800 text-white">
      <div className="flex items-center gap-8 mb-16">
        <div className="bg-white/30 p-5 rounded-full shadow-2xl border border-white/40">
          <DollarSign className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-bold drop-shadow-lg leading-tight">We make sure your money comes back</h2>
      </div>
      
      <div className="space-y-8 text-xl">
        <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl flex items-center gap-8 hover:bg-white/20 transition-all border border-white/25 shadow-xl">
          <div className="bg-green-400/40 p-4 rounded-full flex-shrink-0 shadow-lg">
            <CheckCircle className="w-8 h-8" />
          </div>
          <span className="font-medium drop-shadow-sm leading-relaxed">Reimbursement of 210€ per project </span>
        </div>
        
        <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl flex items-center gap-8 hover:bg-white/20 transition-all border border-white/25 shadow-xl">
          <div className="bg-green-400/40 p-4 rounded-full flex-shrink-0 shadow-lg">
            <CheckCircle className="w-8 h-8" />
          </div>
          <span className="font-medium drop-shadow-sm leading-relaxed">Support for master thesis printing costs</span>
        </div>
        
        <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl flex items-center gap-8 hover:bg-white/20 transition-all border border-white/25 shadow-xl">
          <div className="bg-green-400/40 p-4 rounded-full flex-shrink-0 shadow-lg">
            <CheckCircle className="w-8 h-8" />
          </div>
          <span className="font-medium drop-shadow-sm leading-relaxed">Budget oversight → so there's always enough for events & projects</span>
        </div>
      </div>
    </PresentationSlide>
  );
}

export function Slide3() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-gray-800 to-slate-800 text-white">
      <div className="flex items-center gap-8 mb-16">
        <div className="bg-white/30 p-5 rounded-full shadow-2xl border border-white/40">
          <HelpCircle className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-bold drop-shadow-lg leading-tight">We are your first point of contact</h2>
      </div>
      
      <div className="grid gap-8 text-xl">
        <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl flex items-center gap-8 hover:bg-white/20 transition-all border border-white/25 shadow-xl">
          <div className="bg-orange-300/40 p-4 rounded-full flex-shrink-0 shadow-lg">
            <Star className="w-8 h-8" />
          </div>
          <span className="font-medium drop-shadow-sm leading-relaxed">When grades are missing → we follow up</span>
        </div>
        
        <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl flex items-center gap-8 hover:bg-white/20 transition-all border border-white/25 shadow-xl">
          <div className="bg-orange-300/40 p-4 rounded-full flex-shrink-0 shadow-lg">
            <Users className="w-8 h-8" />
          </div>
          <span className="font-medium drop-shadow-sm leading-relaxed">With problems with teachers or in your program → we accompany you to the conversation</span>
        </div>
        
        <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl flex items-center gap-8 hover:bg-white/20 transition-all border border-white/25 shadow-xl">
          <div className="bg-orange-300/40 p-4 rounded-full flex-shrink-0 shadow-lg">
            <Settings className="w-8 h-8" />
          </div>
          <span className="font-medium drop-shadow-sm leading-relaxed">Refunds & bureaucracy → we help you through the form jungle</span>
        </div>
      </div>
    </PresentationSlide>
  );
}

export function Slide4() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-slate-700 to-gray-800 text-white">
      <div className="flex items-center gap-8 mb-16">
        <div className="bg-white/30 p-5 rounded-full shadow-2xl border border-white/40">
          <Users className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-bold drop-shadow-lg leading-tight">We represent you in important committees</h2>
      </div>
      
      <div className="space-y-10">
        <div className="bg-white/20 backdrop-blur-md p-10 rounded-3xl border border-white/30 shadow-2xl">
          <div className="flex items-center gap-8 text-2xl">
            <div className="bg-purple-300/50 p-5 rounded-full shadow-xl">
              <Vote className="w-10 h-10" />
            </div>
            <span className="font-semibold drop-shadow-md leading-relaxed">Voice for students in university representation & curriculum commission</span>
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-md p-10 rounded-3xl border border-white/30 shadow-2xl">
          <div className="flex items-center gap-8 text-2xl">
            <div className="bg-purple-300/50 p-5 rounded-full shadow-xl">
              <ArrowRight className="w-10 h-10" />
            </div>
            <span className="font-semibold drop-shadow-md leading-relaxed">We bring your concerns directly to the decision-making rounds</span>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
}

export function Slide5() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-gray-700 to-slate-800 text-white">
      <div className="flex items-center gap-8 mb-16">
        <div className="bg-white/30 p-5 rounded-full shadow-2xl border border-white/40">
          <Vote className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-bold drop-shadow-lg leading-tight">We organize elections & participation</h2>
      </div>
      
      <div className="space-y-8 text-xl">
        <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl flex items-center gap-8 hover:bg-white/20 transition-all border border-white/25 shadow-xl">
          <div className="bg-blue-300/40 p-4 rounded-full flex-shrink-0 shadow-lg">
            <CheckCircle className="w-8 h-8" />
          </div>
          <span className="font-medium drop-shadow-sm leading-relaxed">Conducting JGS elections → you determine your representation</span>
        </div>
        
        <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl flex items-center gap-8 hover:bg-white/20 transition-all border border-white/25 shadow-xl">
          <div className="bg-blue-300/40 p-4 rounded-full flex-shrink-0 shadow-lg">
            <Users className="w-8 h-8" />
          </div>
          <span className="font-medium drop-shadow-sm leading-relaxed">Department discussions: we ensure students have a voice</span>
        </div>
        
        <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl flex items-center gap-8 hover:bg-white/20 transition-all border border-white/25 shadow-xl">
          <div className="bg-blue-300/40 p-4 rounded-full flex-shrink-0 shadow-lg">
            <Settings className="w-8 h-8" />
          </div>
          <span className="font-medium drop-shadow-sm leading-relaxed">We coordinate appointments and ensure your voices are heard</span>
        </div>
      </div>
    </PresentationSlide>
  );
}

export function Slide6() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-slate-800 to-gray-700 text-white">
      <div className="flex items-center gap-8 mb-16">
        <div className="bg-white/30 p-5 rounded-full shadow-2xl border border-white/40">
          <Settings className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-bold drop-shadow-lg leading-tight">We keep things together</h2>
      </div>
      
      <div className="space-y-8 text-xl">
        <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl flex items-center gap-8 hover:bg-white/20 transition-all border border-white/25 shadow-xl">
          <div className="bg-teal-300/40 p-4 rounded-full flex-shrink-0 shadow-lg">
            <Users className="w-8 h-8" />
          </div>
          <span className="font-medium drop-shadow-sm leading-relaxed">Regular StV meetings → organization & planning</span>
        </div>
        
        <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl flex items-center gap-8 hover:bg-white/20 transition-all border border-white/25 shadow-xl">
          <div className="bg-teal-300/40 p-4 rounded-full flex-shrink-0 shadow-lg">
            <ArrowRight className="w-8 h-8" />
          </div>
          <span className="font-medium drop-shadow-sm leading-relaxed">Close cooperation with ÖH → we pass on topics</span>
        </div>
        
        <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl flex items-center gap-8 hover:bg-white/20 transition-all border border-white/25 shadow-xl">
          <div className="bg-teal-300/40 p-4 rounded-full flex-shrink-0 shadow-lg">
            <CheckCircle className="w-8 h-8" />
          </div>
          <span className="font-medium drop-shadow-sm leading-relaxed">Task distribution in the team → so no one stands alone</span>
        </div>
      </div>
    </PresentationSlide>
  );
}

export function Slide7() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-gray-800 to-slate-700 text-white">
      <div className="flex items-center gap-8 mb-16">
        <div className="bg-white/30 p-5 rounded-full shadow-2xl border border-white/40">
          <Star className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-bold drop-shadow-lg leading-tight">Why this is all important</h2>
      </div>
      
      <div className="space-y-10">
        <div className="bg-white/20 backdrop-blur-md p-10 rounded-3xl border border-white/30 shadow-2xl">
          <div className="flex items-center gap-8 text-2xl">
            <div className="bg-yellow-300/50 p-5 rounded-full shadow-xl">
              <HelpCircle className="w-10 h-10" />
            </div>
            <span className="font-semibold drop-shadow-md leading-relaxed">So you get support when things get stuck</span>
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-md p-10 rounded-3xl border border-white/30 shadow-2xl">
          <div className="flex items-center gap-8 text-2xl">
            <div className="bg-yellow-300/50 p-5 rounded-full shadow-xl">
              <Users className="w-10 h-10" />
            </div>
            <span className="font-semibold drop-shadow-md leading-relaxed">So your concerns carry weight at the university</span>
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-md p-10 rounded-3xl border border-white/30 shadow-2xl">
          <div className="flex items-center gap-8 text-2xl">
            <div className="bg-yellow-300/50 p-5 rounded-full shadow-xl">
              <Vote className="w-10 h-10" />
            </div>
            <span className="font-semibold drop-shadow-md leading-relaxed">So you can have a say when it comes to your studies</span>
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
}

export function Slide8() {
  return (
    <PresentationSlide className="bg-gradient-to-br from-slate-500 to-slate-600 text-white">
      <div className="text-center w-full relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/15 rounded-full blur-lg"></div>
        
        <div className="bg-white/20 backdrop-blur-md px-10 py-6 rounded-2xl inline-block mb-10 border border-white/30 shadow-2xl">
          <h2 className="text-4xl font-bold drop-shadow-lg">Conclusion</h2>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-8 rounded-full shadow-2xl border-4 border-white/30">
            <Sparkles className="w-16 h-16 text-white drop-shadow-lg" />
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-md p-12 rounded-3xl border border-white/30 mb-10 shadow-2xl">
          <div className="text-3xl font-bold leading-relaxed drop-shadow-lg">
            We are your voice, your support and your organization crew
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-6 text-xl bg-white/15 px-8 py-4 rounded-full border border-white/25 shadow-xl">
          <CheckCircle className="w-6 h-6 text-green-300" />
          <span className="font-semibold drop-shadow-sm">Everything we do is so you have a better study experience.</span>
          <CheckCircle className="w-6 h-6 text-green-300" />
        </div>
      </div>
    </PresentationSlide>
  );
}