import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card/card";
import { Link } from "react-router-dom";

import reviewIcon from '@/public/assets/icons/review.svg';
import half_reviewIcon from '@/public/assets/icons/half_review.svg';

import woman1Img from '@/public/assets/images/woman1.png';
import man1Img from '@/public/assets/images/man1.png';
import man2Img from '@/public/assets/images/man2.png';

export default function UsersSay() {
    return (
        <div className="bg-gray-50 w-full p-24 flex flex-col items-center">
            <Link className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900 text-center mb-4">
                What Our Users Say
            </Link>
            <div className="w-full flex flex-col items-center">
                <div className="w-full flex flex-col items-center mb-16">
                    <Link className="text-lg sm:text-xl font-normal leading-7 text-gray-600 text-center">
                        Join these industry professionals already using FilmGearHub
                    </Link>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch">
                    {/* Card 1 */}
                    <Card className="flex-1 rounded-xl shadow-md flex flex-col p-6 min-w-64 max-w-md">
                        <CardHeader className="flex flex-row items-center mb-4 p-0">
                            <img
                                src={man1Img}
                                alt="Michael Rodriguez"
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <div className="ml-4">
                                <CardTitle className="text-base font-bold leading-6 text-gray-900 mb-0">
                                    Michael Rodriguez
                                </CardTitle>
                                <span className="block text-sm font-normal leading-5 text-gray-600">
                                    Cinematographer, Los Angeles
                                </span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-1 p-0">
                            <div className="mb-4">
                                <span className="block text-base font-normal leading-tight text-gray-600 text-left">
                                    "FilmGearHub has transformed how I source
                                </span>
                                <span className="block text-base font-normal leading-tight text-gray-600 text-left">
                                    equipment for my projects. I've connected
                                </span>
                                <span className="block text-base font-normal leading-tight text-gray-600 text-left">
                                    with several great rental houses I wouldn't
                                </span>
                                <span className="block text-base font-normal leading-tight text-gray-600 text-left">
                                    have found otherwise."
                                </span>
                            </div>
                            <div className="flex items-center gap-1 mt-auto">
                                <img src={reviewIcon} alt="Review" className="w-5 h-4" />
                                <img src={reviewIcon} alt="Review" className="w-5 h-4" />
                                <img src={reviewIcon} alt="Review" className="w-5 h-4" />
                                <img src={reviewIcon} alt="Review" className="w-5 h-4" />
                                <img src={reviewIcon} alt="Review" className="w-5 h-4" />
                            </div>
                        </CardContent>
                    </Card>
                    {/* Card 2 */}
                    <Card className="flex-1 rounded-xl shadow-md flex flex-col p-6 min-w-64 max-w-md">
                        <CardHeader className="flex flex-row items-center mb-4 p-0">
                            <img
                                src={woman1Img}
                                alt="Sarah Johnson"
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <div className="ml-4">
                                <CardTitle className="text-base font-bold leading-6 text-gray-900 mb-0">
                                    Sarah Johnson
                                </CardTitle>
                                <span className="block text-sm font-normal leading-5 text-gray-600">
                                    Production Manager, New York
                                </span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-1 p-0">
                            <div className="mb-4">
                                <span className="block text-base font-normal leading-tight text-gray-600 text-left">
                                    "The RFQ feature saves me hours of calling
                                </span>
                                <span className="block text-base font-normal leading-tight text-gray-600 text-left">
                                    around for quotes. I can quickly compare
                                </span>
                                <span className="block text-base font-normal leading-tight text-gray-600 text-left">
                                    options and find exactly what my production
                                </span>
                                <span className="block text-base font-normal leading-tight text-gray-600 text-left">
                                    needs."
                                </span>
                            </div>
                            <div className="flex items-center gap-1 mt-auto">
                                <img src={reviewIcon} alt="Review" className="w-5 h-4" />
                                <img src={reviewIcon} alt="Review" className="w-5 h-4" />
                                <img src={reviewIcon} alt="Review" className="w-5 h-4" />
                                <img src={reviewIcon} alt="Review" className="w-5 h-4" />
                                <img src={half_reviewIcon} alt="Half Review" className="w-5 h-4" />
                            </div>
                        </CardContent>
                    </Card>
                    {/* Card 3 */}
                    <Card className="flex-1 rounded-xl shadow-md flex flex-col p-6 min-w-64 max-w-md">
                        <CardHeader className="flex flex-row items-center mb-4 p-0">
                            <img
                                src={man2Img}
                                alt="David Chen"
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <div className="ml-4">
                                <CardTitle className="text-base font-bold leading-6 text-gray-900 mb-0">
                                    David Chen
                                </CardTitle>
                                <span className="block text-sm font-normal leading-5 text-gray-600">
                                    Equipment Rental Owner, Atlanta
                                </span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-1 p-0">
                            <div className="mb-4">
                                <span className="block text-base font-normal leading-tight text-gray-600 text-left">
                                    "As a merchant, FilmGearHub has helped me
                                </span>
                                <span className="block text-base font-normal leading-tight text-gray-600 text-left">
                                    reach new clients and grow my business. The
                                </span>
                                <span className="block text-base font-normal leading-tight text-gray-600 text-left">
                                    platform is intuitive and the social features
                                </span>
                                <span className="block text-base font-normal leading-tight text-gray-600 text-left">
                                    build real relationships."
                                </span>
                            </div>
                            <div className="flex items-center gap-1 mt-auto">
                                <img src={reviewIcon} alt="Review" className="w-5 h-4" />
                                <img src={reviewIcon} alt="Review" className="w-5 h-4" />
                                <img src={reviewIcon} alt="Review" className="w-5 h-4" />
                                <img src={reviewIcon} alt="Review" className="w-5 h-4" />
                                <img src={reviewIcon} alt="Review" className="w-5 h-4" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}