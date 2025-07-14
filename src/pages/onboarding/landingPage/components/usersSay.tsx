import React from "react";

import { Card, CardHeader, CardContent } from "@/src/components/ui/card";
import { Typography } from "@/src/components/ui/typography";

import reviewIcon from '@/public/assets/icons/review.svg';
import half_reviewIcon from '@/public/assets/icons/half_review.svg';
import woman1Img from '@/public/assets/images/woman1.png';
import man1Img from '@/public/assets/images/man1.png';
import man2Img from '@/public/assets/images/man2.png';

export default function UsersSay() {
    return (
        <div className="bg-gray-50 w-full p-6 md:p-24 flex flex-col items-center">
            <Typography variant="h1" className="text-center mb-4">
                What Our Users Say
            </Typography>
            <div className="w-full flex flex-col items-center">
                <div className="w-full flex flex-col items-center mb-4 md:mb-16">
                    <Typography variant="heroSub" className="text-center">
                        Join these industry professionals already using FilmGearHub
                    </Typography>
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
                                <Typography variant="reviewUserName">
                                    Michael Rodriguez
                                </Typography>
                                <Typography variant="reviewUserInfo">
                                    Cinematographer, Los Angeles
                                </Typography>
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-1 p-0">
                            <div className="mb-4">
                                <Typography variant="reviewText">
                                    "FilmGearHub has transformed how I source
                                </Typography>
                                <Typography variant="reviewText">
                                    equipment for my projects. I've connected
                                </Typography>
                                <Typography variant="reviewText">
                                    with several great rental houses I wouldn't
                                </Typography>
                                <Typography variant="reviewText">
                                    have found otherwise."
                                </Typography>
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
                                <Typography variant="reviewUserName">
                                    Sarah Johnson
                                </Typography>
                                <Typography variant="reviewUserInfo">
                                    Production Manager, New York
                                </Typography>
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-1 p-0">
                            <div className="mb-4">
                                <Typography variant="reviewText">
                                    "The RFQ feature saves me hours of calling
                                </Typography>
                                <Typography variant="reviewText">
                                    around for quotes. I can quickly compare
                                </Typography>
                                <Typography variant="reviewText">
                                    options and find exactly what my production
                                </Typography>
                                <Typography variant="reviewText">
                                    needs."
                                </Typography>
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
                                <Typography variant="reviewUserName">
                                    David Chen
                                </Typography>
                                <Typography variant="reviewUserInfo">
                                    Equipment Rental Owner, Atlanta
                                </Typography>
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-1 p-0">
                            <div className="mb-4">
                                <Typography variant="reviewText">
                                    "As a merchant, FilmGearHub has helped me
                                </Typography>
                                <Typography variant="reviewText">
                                    reach new clients and grow my business. The
                                </Typography>
                                <Typography variant="reviewText">
                                    platform is intuitive and the social features
                                </Typography>
                                <Typography variant="reviewText">
                                    build real relationships."
                                </Typography>
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