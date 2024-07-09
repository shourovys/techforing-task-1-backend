import mongoose, { Document, Schema } from 'mongoose';

export interface IJob extends Document {
  company: string;
  userId: mongoose.Schema.Types.ObjectId;
  coordinator: string;
  jobTitle: string;
  level: string;
  shift: string;
  location: string;
  vacancies: number;
  jobType: string;
  jobOverview: string;
  jobResponsibilities: string;
  jobRequirements: string;
  department: {
    id: number;
    department: string;
  };
}

const jobSchema = new Schema<IJob>({
  company: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  coordinator: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  shift: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  vacancies: {
    type: Number,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  jobOverview: {
    type: String,
    required: true,
  },
  jobResponsibilities: {
    type: String,
    required: true,
  },
  jobRequirements: {
    type: String,
    required: true,
  },
  department: {
    id: {
      type: Number,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
  },
});

const Job = mongoose.model<IJob>('Job', jobSchema);

export default Job;
