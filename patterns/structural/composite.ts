namespace compositePattern {
    interface Employee {
        getName(): String
        setSalary(salary: number): void
        getSalary(): number
        getRoles(): Array<String> | undefined
    }

    class Developer implements Employee {
        protected salary: number
        protected name: String
        protected roles: String[] | undefined

        public constructor(name: String, salary: number) {
            this.name = name
            this.salary = salary
        }

        public getName(): String {
            return this.name
        }

        public setSalary(salary: number): void {
            this.salary = salary
        }

        public getSalary(): number {
            return this.salary
        }

        public getRoles(): String[] | undefined {
            return this.roles
        }
    }

    class Designer implements Employee {
        protected salary: number
        protected name: String
        protected roles: String[] | undefined

        public constructor(name: String, salary: number) {
            this.name = name
            this.salary = salary
        }

        public getName(): String {
            return this.name
        }

        public setSalary(salary: number): void {
            this.salary = salary
        }

        public getSalary(): number {
            return this.salary
        }

        public getRoles(): String[] | undefined {
            return this.roles
        }
    }

    class Organization {
        protected employees: Employee[] = []

        public addEmployee(employee: Employee) {
            this.employees.push(employee)
        }

        public getNetSalaries(): number {
            let netSalary: number = 0

            this.employees.forEach((employee) => {
                netSalary += employee.getSalary()
            })

            return netSalary
        }
    }

    let john = new Developer("John Doe", 12000)
    let jane = new Designer("Jane Doe", 15000)

    let organization = new Organization()
    organization.addEmployee(john)
    organization.addEmployee(jane)

    console.log('Net salaries: ', organization.getNetSalaries());
}