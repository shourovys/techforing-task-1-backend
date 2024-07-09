import { Request, Response } from 'express';
import Job from '../models/Job';
import { AuthRequest } from '../types';

// Get all jobs
const getJobs = async (req: Request, res: Response) => {
  console.log('🚀 ~ getJobs ~ req:', req);
  try {
    const jobs = await Job.find();
    console.log('🚀 ~ getJobs ~ jobs:', jobs);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch jobs', error });
  }
};

// Create a new job
const createJob = async (req: AuthRequest, res: Response) => {
  const {
    category,
    title,
    description,
    company,
    coordinator,
    jobTitle,
    level,
    shift,
    location,
    vacancies,
    jobType,
    jobOverview,
    jobResponsibilities,
    jobRequirements,
    department,
  } = req.body;

  try {
    const job = new Job({
      category,
      title,
      description,
      company,
      coordinator,
      jobTitle,
      level,
      shift,
      location,
      vacancies,
      jobType,
      jobOverview,
      jobResponsibilities,
      jobRequirements,
      department,
      userId: req.user?._id,
    });

    const createdJob = await job.save();
    res.status(200).json(createdJob);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create job', error });
  }
};

// Delete a job
const deleteJob = async (req: AuthRequest, res: Response) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // if (
    //   (job.userId as unknown as Types.ObjectId).equals(
    //     req.user?._id as unknown as Types.ObjectId
    //   )
    // ) {
    await Job.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Job removed' });
    // } else {
    //   res
    //     .status(403)
    //     .json({ message: 'User not authorized to delete this job' });
    // }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete job', error });
  }
};

const updateJob = async (req: AuthRequest, res: Response): Promise<void> => {
  const {
    category,
    title,
    description,
    company,
    coordinator,
    jobTitle,
    level,
    shift,
    location,
    vacancies,
    jobType,
    jobOverview,
    jobResponsibilities,
    jobRequirements,
    department,
  } = req.body;

  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      res.status(404).json({ message: 'Job not found' });
      return;
    }

    // Update job fields
    Object.assign(job, {
      category,
      title,
      description,
      company,
      coordinator,
      jobTitle,
      level,
      shift,
      location,
      vacancies,
      jobType,
      jobOverview,
      jobResponsibilities,
      jobRequirements,
      department,
    });

    const updatedJob = await job.save();
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update job', error });
  }
};

export { createJob, deleteJob, getJobs, updateJob };
