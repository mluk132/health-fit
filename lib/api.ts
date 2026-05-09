const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://health-fit-api.fly.dev';

export interface Workout {
  id: string;
  user_id: string;
  name: string;
  type?: string;
  duration_minutes?: number;
  calories_burned?: number;
  date: string;
  notes?: string;
  created_at: string;
  exercises?: Exercise[];
}

export interface Exercise {
  id: string;
  workout_id: string;
  name: string;
  sets?: number;
  reps?: number;
  weight?: number;
  notes?: string;
}

export interface Meal {
  id: string;
  user_id: string;
  name: string;
  meal_type?: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fats?: number;
  date: string;
  notes?: string;
  created_at: string;
}

export interface Routine {
  id: string;
  user_id: string;
  routine_type: string;
  name: string;
  description?: string;
  frequency?: string;
  time_of_day?: string;
  active: boolean;
  created_at: string;
  total_completions?: number;
  last_completed?: string;
}

export interface CreateWorkoutData {
  name: string;
  type?: string;
  duration_minutes?: number;
  calories_burned?: number;
  date: string;
  notes?: string;
  exercises?: Array<{
    name: string;
    sets?: number;
    reps?: number;
    weight?: number;
    notes?: string;
  }>;
}

export interface CreateMealData {
  name: string;
  meal_type?: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fats?: number;
  date: string;
  notes?: string;
}

export interface CreateRoutineData {
  routine_type: string;
  name: string;
  description?: string;
  frequency?: string;
  time_of_day?: string;
  active?: boolean;
}

class ApiClient {
  private baseUrl: string;
  private userId: string;

  constructor() {
    this.baseUrl = API_URL;
    this.userId = '00000000-0000-0000-0000-000000000001';
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'x-user-id': this.userId,
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `HTTP ${response.status}`);
    }

    return response.json();
  }

  // Workouts
  async getWorkouts(): Promise<Workout[]> {
    return this.request('/api/workouts');
  }

  async getWorkout(id: string): Promise<Workout> {
    return this.request(`/api/workouts/${id}`);
  }

  async createWorkout(data: CreateWorkoutData): Promise<Workout> {
    return this.request('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateWorkout(id: string, data: Partial<CreateWorkoutData>): Promise<Workout> {
    return this.request(`/api/workouts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteWorkout(id: string): Promise<{ message: string }> {
    return this.request(`/api/workouts/${id}`, {
      method: 'DELETE',
    });
  }

  async getWorkoutStats(): Promise<any> {
    return this.request('/api/workouts/stats/summary');
  }

  // Meals
  async getMeals(): Promise<Meal[]> {
    return this.request('/api/meals');
  }

  async getMeal(id: string): Promise<Meal> {
    return this.request(`/api/meals/${id}`);
  }

  async createMeal(data: CreateMealData): Promise<Meal> {
    return this.request('/api/meals', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateMeal(id: string, data: Partial<CreateMealData>): Promise<Meal> {
    return this.request(`/api/meals/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteMeal(id: string): Promise<{ message: string }> {
    return this.request(`/api/meals/${id}`, {
      method: 'DELETE',
    });
  }

  async getMealStats(): Promise<any> {
    return this.request('/api/meals/stats/summary');
  }

  // Routines
  async getRoutines(): Promise<Routine[]> {
    return this.request('/api/routines');
  }

  async getRoutine(id: string): Promise<Routine> {
    return this.request(`/api/routines/${id}`);
  }

  async createRoutine(data: CreateRoutineData): Promise<Routine> {
    return this.request('/api/routines', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateRoutine(id: string, data: Partial<CreateRoutineData>): Promise<Routine> {
    return this.request(`/api/routines/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteRoutine(id: string): Promise<{ message: string }> {
    return this.request(`/api/routines/${id}`, {
      method: 'DELETE',
    });
  }

  async logRoutineCompletion(id: string, data?: { completed_at?: string; notes?: string }): Promise<any> {
    return this.request(`/api/routines/${id}/log`, {
      method: 'POST',
      body: JSON.stringify(data || {}),
    });
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

export const api = new ApiClient();
