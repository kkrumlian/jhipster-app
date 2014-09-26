package com.mycompany.myapp.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Organization.
 */
@Entity
@Table(name = "ORGANIZATION")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Organization extends AbstractAuditingEntity implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.TABLE)
  private long id;

  @Size(min = 1, max = 512)
  @Column(name = "name")
  private String name;
  
  @Size(min = 1, max = 512)
  @Column(name = "customer_number")
  private String customerNumber;

  public long getId() {
      return id;
  }

  public void setId(long id) {
      this.id = id;
  }

  public String getName() {
      return name;
  }

  public void setName(String name) {
      this.name = name;
  }
  
	public String getCustomerNumber() {
	  return customerNumber;
  }

	public void setCustomerNumber(String customerNumber) {
	  this.customerNumber = customerNumber;
  }

  @Override
  public boolean equals(Object o) {
      if (this == o) {
          return true;
      }
      if (o == null || getClass() != o.getClass()) {
          return false;
      }

      Organization organization = (Organization) o;

      if (id != organization.id) {
          return false;
      }

      return true;
  }

  @Override
  public int hashCode() {
      return (int) (id ^ (id >>> 32));
  }

  @Override
  public String toString() {
      return "Organization{" +
              "id=" + id +
              ", name='" + name + '\'' +
              '}';
  }
}
